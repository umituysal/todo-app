
import React from 'react';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import AppContent from './components/AppContent';
import './styles/global.css';
import styles from'./styles/modules/app.module.scss';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div className="container">
      <PageTitle>TODO List</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          fontSize: '1.4rem',
        },
      }}
    />
  </>
  );
}

export default App;
