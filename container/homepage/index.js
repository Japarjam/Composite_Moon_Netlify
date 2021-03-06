import { Navbar } from '../../components/navbar'
import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";
import { KeypointSection } from "./keypointSection";
import styles from "./index.module.css";
import { WhyUsSection } from "./whyUsSection";
import { HowItWorkSection } from './howItWorks/howItWork';
import { TeamInfoSection } from './teamInfo';

export function HomePage(props) {
    return (
        <section className={styles.container}>
            <TopSection />
            <KeypointSection /> 
            <HowItWorkSection />
            {/* <TeamInfoSection /> */}
            <WhyUsSection /> 
        </section>
    );
}