import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Challenge from "../components/Challenge";
import Footer from "../components/Footer";
import HallOfFame from "../components/HallOfFame";
import Hero from "../components/Hero";
import Web3Modal from "web3modal";
import { Contract, ethers, providers, Signer, utils } from "ethers";
import Statistics from "../components/Statistics";
import Navbar from "../components/Navbar";
import { ABI, DECETABLE_CONTRACT } from "../constants";
import Goal from "../models/Goal";
import { formatGoalsArray } from "../utils";
import ToastState from "../models/Toast";

const Home: NextPage = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [account, setAccount] = useState("");
    const [goals, setGoals] = useState<Goal[]>([]);
    const [totalGoals, setTotalGoals] = useState(0);
    const [totalGoalsSucceeded, setTotalGoalsSucceeded] = useState(0);
    const [totalPayback, setTotalPayback] = useState(0);
    const [totalDonated, setTotalDonated] = useState(0);
    const [toastState, setToastState] = useState<ToastState>();
    const [toastMessage, setToastMessage] = useState("");

    const web3ModalRef = useRef();

    /*
    #############################
    BLOCKCHAIN CONNECTION
    #############################
    */
    const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // @ts-ignore: Object is possibly 'null'
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);

        const { chainId } = await web3Provider.getNetwork();
        // Localhost = 31337, Mumbai = 80001

        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;
        }

        if (account === "") {
            setAccount(await web3Provider.getSigner().getAddress());
        }

        return web3Provider;
    };

    const connectWallet = async () => {
        try {
            await getProviderOrSigner();
            setWalletConnected(true);
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    useEffect(() => {
        if (!walletConnected) {
            web3ModalRef.current = new Web3Modal({
                network: "localhost",
                providerOptions: {},
                disableInjectedProvider: false,
            }) as any;
        }
        // Fetch data from the blockchain
        getGoals();
        getTotalGoalsSucceeded();
        getTotalPayback();
        getTotalCharity();
    }, [walletConnected]);

    /*
    #############################
    GETTER FUNCTIONS
    #############################
    */
    const getGoals = async (): Promise<void> => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalGoals: number = await contract.totalGoals();

            totalGoals = +totalGoals;

            setTotalGoals(totalGoals);

            const fragments: any = await contract.getGoals();
            const allGoals: Goal[] = formatGoalsArray(fragments, totalGoals);
            console.log(allGoals);

            setGoals(allGoals);
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    const getTotalGoals = async (): Promise<void> => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalGoals: number = await contract.totalGoals();
            totalGoals = +totalGoals;

            setTotalGoals(totalGoals);
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    const getTotalGoalsSucceeded = async (): Promise<void> => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalGoalsSucceeded: number =
                await contract.totalGoalsSucceeded();
            totalGoalsSucceeded = +totalGoalsSucceeded;

            setTotalGoalsSucceeded(totalGoalsSucceeded);
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    const getTotalPayback = async (): Promise<void> => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalPayback: number = await contract.totalPayback();
            totalPayback = +ethers.utils.formatEther(totalPayback.toString());

            setTotalPayback(totalPayback);
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    const getTotalCharity = async (): Promise<void> => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalCharity: number = await contract.totalCharity();
            totalCharity = +totalCharity;

            setTotalDonated(totalCharity);
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    /*
    #############################
    TRANSACTION FUNCTIONS
    #############################
    */
    const createGoal = async (goal: Goal, days: number): Promise<void> => {
        try {
            // TODO: Activate before launch
            // if (goal.trustedPerson === account)
            //     throw new Error(
            //         "You can't be the trusted person for your own goal!"
            //     );

            const provider = await getProviderOrSigner(true);

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            const tx = await contract.createGoal(
                goal.name,
                goal.description,
                Math.floor((Date.now() + days * 86400000) / 1000),
                goal.trustedPerson,
                { value: ethers.utils.parseEther(String(goal.investment)) }
            );
            await tx.wait();

            setGoals([...goals, goal]);
            await getGoals();
            await getTotalGoals();

            handleToastState(0, "Your Goal was successfully created!");
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    const submitGoal = async (goal: Goal): Promise<void> => {
        const deadlineIsOver: boolean = goal.deadline < Date.now();
        if (goal.trustedPerson !== account)
            throw new Error("You are not the trusted person!");

        try {
            const provider = await getProviderOrSigner(true);

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            const tx = await contract.setGoalStatus(goal.id);
            await tx.wait();

            deadlineIsOver ? (goal.succeeded = false) : (goal.succeeded = true);
            goal.finished = true;

            // setGoals([...goals, goal]);
            getTotalGoalsSucceeded();
            getTotalPayback();
            getTotalCharity();
            handleToastState(0, "The Goal was successfully submitted!");
        } catch (error: any) {
            handleToastState(3, error);
        }
    };

    /*
    #############################
    UTILITY FUNCTIONS
    #############################
    */
    const handleToastState = (state: ToastState, message: string): void => {
        setToastState(state);
        setToastMessage(message);

        setTimeout(() => {
            setToastMessage("");
        }, 4000);
    };

    return (
        <div>
            <Head>
                <title>Decetable</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/favicon/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon/favicon-16x16.png'
                />
                <link rel='manifest' href='/favicon/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/favicon/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
            </Head>

            <main className='bg-main'>
                <Navbar connectWallet={connectWallet} />
                <Hero toastState={toastState} toastMessage={toastMessage} />
                <About />
                <Challenge
                    totalGoals={totalGoals}
                    account={account}
                    createGoal={createGoal}
                />
                <Statistics
                    totalGoals={totalGoals}
                    totalGoalsSucceeded={totalGoalsSucceeded}
                    totalPayback={totalPayback}
                    totalDonated={totalDonated}
                />
                <HallOfFame goals={goals} submitGoal={submitGoal} />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
