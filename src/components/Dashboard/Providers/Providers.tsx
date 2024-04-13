// import DashboardPlaceholder from "../DashboardPlaceholder";
// import SearchBar from '../../Appbar/Searchbar/SearchBar';
import * as React from 'react';
import styles from './Providers.module.css'
import SearchBarProviders from './SearchBarProviders';
import { DashboardContext } from '../../../contexts/DashboardContext';
import ProviderCard from './ProviderCard';

function Providers() {
  // @ts-expect-error -- Property 'isLoading' does not exist on type '{}'.ts(2339)
  const {data, isLoading, error} = React.useContext(DashboardContext)
  const [searchText, setSearchText] = React.useState('');
  if (isLoading){
    return <h1>Loading</h1>
  }
  if(error){
    return <h1>Error</h1>
  }
  const providersData = data.providers;
  console.log('providersData', providersData);

  const filteredProviders = providersData.filter(provider =>
    provider.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    // <DashboardPlaceholder placeholderText={"Proveedores"} />
  <div className={styles.container}>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>Proveedores</h1>
    </div>
    <div className={styles.searchWrapper}>
      <h2 className={styles.searchTitle}>Nombre</h2>
      <SearchBarProviders 
        width={'90%'}
        height={'34px'}
        placeholder={'Ej: Electricista Lumix'}
        onChange={setSearchText}
      >
      </SearchBarProviders>
      <div className={styles.wrapper}>
        <div className={styles.cardContainer}>
          {filteredProviders.map(provider => (
              <ProviderCard 
                key={provider.id}
                name={provider.title}
                img={provider.image_url}
                phone={provider.phone_number}
                // review={provider.review_count}
                description={provider.description}>
              </ProviderCard>
            ))} 
        </div>
      </div>
{/* 
      // <div className={styles.wrapper}>
      //   <div className={styles.cardContainer}>
      //     {filteredProviders.map(provider => (
      //       <ProviderCard 
      //         key={provider.id}
      //         name={provider.title}
      //         img={provider.image_url}
      //         phone={provider.phone_number}
      //         review={provider.review_count}
      //         description={provider.description}>
      //       </ProviderCard>
      //     ))}
      //   </div> */}
      </div>
      {/* <div className={styles.empty}></div>
    </div> */}
  </div>);
}

export default Providers;
