import Image from "next/image";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";

import styles from "./Footer.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logoImage}
              src="/car-logo.jpg"
              width={2000}
              height={2000}
              alt="Logo"
            />
          </Link>
          <p className={styles.tagline}>
            Your trusted car showroom since 2024.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <Link href="/toyota">Toyota</Link>
          <Link href="/honda">Honda</Link>
          <Link href="/tesla">Tesla</Link>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
                        <a href="https://github.com/arifkhanpk" className={styles.github}
                          target="_blank"
>
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className={styles.bottomSection}>
        <p>
          © 2024 Car Showroom —
          <Link
            href="https://portfolio-tailwind-wine.vercel.app/"
            className="text-gray-100 ml-1 underline hover:text-gray-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Muhammad Arif Khan
          </Link>
        </p>
      </div>
    </footer>
  );
}
