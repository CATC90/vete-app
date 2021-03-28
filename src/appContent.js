import React, { useContext } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Routes from './routes';

import { AppContext } from './provider';
import { sidebarItems, HeaderContent, FooterContent } from './provider/sidebar';

function AppContent() {
  const { sidebar } = useContext(AppContext);

  return (
    <>
      <Header showSidebar={() => sidebar.setOpen(true)} />
      <Sidebar
        id="__sidebar"
        headerContent={sidebar.header || <HeaderContent />}
        footerContent={sidebar.footer || <FooterContent />}
        cssClass={sidebar.cssClass}
        items={sidebarItems}
        isOpen={sidebar.open}
        hide={() => sidebar.setOpen(false)}
      />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default AppContent;
