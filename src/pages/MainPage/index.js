import React from 'react';
import Layout from "../../components/Layout";
import DetailedCard from "../../components/DetailedCard";

const MainPage = () => {
    return (
      <Layout nickName={'Dimon'}>
         <>
             <div>main page</div>
             <DetailedCard></DetailedCard>
         </>
      </Layout>
    );
};

export default MainPage;
