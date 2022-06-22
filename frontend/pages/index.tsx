import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Challenge from "../components/Challenge";
import Footer from "../components/Footer";
import HallOfFame from "../components/HallOfFame";
import Hero from "../components/Hero";
import Web3Modal from "web3modal";
import { Contract, providers, utils } from "ethers";
import Statistics from "../components/Statistics";
import Navbar from "../components/Navbar";
import { ABI, DECETABLE_CONTRACT } from "../constants";
import Goal from "../models/Goal";

const Home: NextPage = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [challenge, setChallenge] = useState("");
    const [days, setDays] = useState(0);
    const [trustedAccount, setTrustedAccount] = useState("");
    const [totalGoals, setTotalGoals] = useState(0);
    const [totalGoalsSucceeded, setTotalGoalsSucceeded] = useState(0);
    const [totalPayback, setTotalPayback] = useState(0);
    const [totalDonated, setTotalDonated] = useState(0);

    const web3ModalRef = useRef();

    const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // @ts-ignore: Object is possibly 'null'
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);

        // If user is not connected to the Rinkeby network, let them know and throw an error
        const { chainId } = await web3Provider.getNetwork();
        // Localhost = 31337, Mumbai = 80001
        if (chainId !== 31337) {
            window.alert("Change the network to Mumbai");
            throw new Error("Change network to Mumbai");
        }

        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;
        }
        return web3Provider;
    };

    const connectWallet = async () => {
        try {
            await getProviderOrSigner();
            setWalletConnected(true);
        } catch (error) {
            console.log(error);
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
        getTotalGoals();
        getTotalGoalsSucceeded();
        getTotalPayback();
        getTotalCharity();
    }, [walletConnected]);

    /*
    #############################
    GETTER FUNCTIONS
    #############################
    */
    const getTotalGoals = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalGoals: number = await contract.totalGoals();
            totalGoals = +totalGoals.toString();

            setTotalGoals(totalGoals);
        } catch (error) {}
    };

    const getTotalGoalsSucceeded = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalGoalsSucceeded: number =
                await contract.totalGoalsSucceeded();
            totalGoalsSucceeded = +totalGoalsSucceeded.toString();

            setTotalGoalsSucceeded(totalGoals);
        } catch (error) {}
    };

    const getTotalPayback = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalPayback: number = await contract.totalPayback();
            totalPayback = +totalPayback.toString();

            setTotalPayback(totalGoals);
        } catch (error) {}
    };

    const getTotalCharity = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            let totalCharity: number = await contract.totalCharity();
            totalCharity = +totalCharity.toString();

            setTotalDonated(totalGoals);
        } catch (error) {}
    };

    /*
    #############################
    TRANSACTION FUNCTIONS
    #############################
    */
    const createGoal = async (goal: Goal) => {
        try {
            const provider = await getProviderOrSigner(true);

            const contract = new Contract(DECETABLE_CONTRACT, ABI, provider);

            const tx = await contract.createGoal(goal);
            await tx.wait();
            setGoals([...goals, goal]);
        } catch (error) {
            console.log(error);
        }
    };

    const submitGoal = async (goal: Goal) => {
        // TODO: Submit goal with success or failed
        // TODO: Update Statistics
        // TODO: Update Goal Status
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
                <Hero />
                <About />
                <Challenge
                    challenge={challenge}
                    days={days}
                    trustedAccount={trustedAccount}
                />
                <Statistics
                    totalGoals={totalGoals}
                    totalGoalsSucceeded={totalGoalsSucceeded}
                    totalPayback={totalPayback}
                    totalDonated={totalDonated}
                />
                <HallOfFame goals={goals} />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
