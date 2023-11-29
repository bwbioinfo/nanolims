// components/SideDrawer.js

import styles from './SideDrawer.module.css';
import PropTypes from 'prop-types';

const SideDrawer = ({ isOpen, onClose, children }) => {
  const drawerClasses = isOpen ? [styles.sideDrawer, styles.open] : [styles.sideDrawer];

  return (
    <div className={drawerClasses.join(' ')}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.drawerContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SideDrawer;
