import { robotoCondensed } from "@/app/fonts";
import {
    faPizzaSlice,
    faFire,
    faCircleUser,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <div className={`${styles.container} container`}>
                <h2 className={styles.logo}>Pizzahub</h2>
                <div className={styles.links__container}>
                    <ul
                        className={`${robotoCondensed.className} ${styles.links__list}`}
                    >
                        <li className={styles.link}>
                            <FontAwesomeIcon
                                icon={faPizzaSlice}
                                className={styles.icon}
                            />
                            Menu
                        </li>
                        <li
                            className={`${styles.linkHighlight} ${styles.link}`}
                        >
                            <FontAwesomeIcon
                                icon={faFire}
                                className={styles.icon}
                            />
                            New Deals
                        </li>
                        <li className={styles.link}>
                            <FontAwesomeIcon
                                icon={faCircleUser}
                                className={styles.icon}
                            />
                            Log in
                        </li>
                        <li className={styles.link}>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className={styles.icon}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
