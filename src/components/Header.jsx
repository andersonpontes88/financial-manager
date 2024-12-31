import PropTypes from "prop-types";
import { FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-blue-500 text-white p-4 shadow-md md:p-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.h1
          className="text-3xl font-bold flex items-center gap-2"
          whileHover={{ scale: 1.2 }}
        >
          <FaWallet /> Gerenciador Financeiro
        </motion.h1>
      </div>
    </motion.header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
