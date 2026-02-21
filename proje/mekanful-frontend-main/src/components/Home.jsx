// Gerekli bileşenleri içe aktar
import InputWithLabel from "./InputWithLabel"; // Arama kutusu bileşeni
import VenueList from "./VenueList"; // Mekan listesi bileşeni
import Header from "./Header"; // Başlık bileşeni
import React, { useState } from "react"; // React ve state hook'u
import venuesData from "../data/venues.json"; // Mekan verileri (JSON dosyasından)
import { useSelector,useDispatch } from "react-redux";
import VenueDataService from "../services/VenueDataService";
import { use } from "react";


// Ana sayfa bileşeni
const Home = () => {
 
  const dispatch=useDispatch();  
  const isloading=useSelector((state)=>state.isloading);
  const isError=useSelector((state)=>state.isError);
  const isSuccess=useSelector((state)=>state.isSuccess);
  const[coordinates, setCoordinates] = useState({lat: 1, long: 1});
  //const[coordinates, setCoordinates] = useState({lat: 37, long: 35});
 const venues=useSelector((state)=>state.data);
  // Mekan verileri JSON dosyasından alınır (normalde API'den gelecek)
  // Bu sayede veriler tek bir yerde tutulur ve değişiklikler kolaylaşır
  
  
  // Arama metni için state tanımla
  const [searchVenue, setSearchVenue] = useState("");
  
  // Arama kutusuna yazıldığında çalışan fonksiyon
  const search = (event) => {
    setSearchVenue(event.target.value);
  };
  React.useEffect(()=>{
  dispatch({type:"FETCH_INIT"});
  VenueDataService.nearbyVenues(coordinates.lat,coordinates.long)
    .then((response)=>{
      
      dispatch({type:"FETCH_SUCCESS",payload:response.data});})
    .catch(()=>{
      dispatch({type:"FETCH_FAILURE"});});},);

  // Bileşen yüklendiğinde çalışacak (şu an boş)
  // Boş dizi [] = Bu effect sadece bileşen ilk yüklendiğinde 1 kez çalışır
  // Eğer dizi içinde değişken olsaydı, o değişken her değiştiğinde tekrar çalışırdı
  React.useEffect(() => {
     if("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(function(position) {
          setCoordinates(
            {lat: position.coords.latitude, 
            long: position.coords.longitude
          });
       });
      }
  }, []);

  // Mekanları arama metnine göre filtrele
  // Mekan adı, arama metnini içeriyorsa listede göster
  const filteredVenues = Array.isArray(venues) ? venues.filter((venue) => {
    return venue.name.toLowerCase().includes(searchVenue.toLowerCase());
  }) : [];
  
  return (
    <div>
      {/* Sayfa başlığı ve slogan */}
      <Header
        headerText="Mekanbul"
        motto="Civarınızdaki Mekanlarınızı Keşfedin!"
      />
      
      {/* Arama kutusu */}
      <InputWithLabel
        id="arama"
        label="Mekan Ara:"
        type="text"
        isFocused
        onInputChange={search}
        value={searchVenue}
      />
      
      <hr />
      
      {/* Mekan listesi */}
      <div className="row">
        <div className="row">
          {/* Filtrelenmiş mekanları listele */}
          <VenueList venues={filteredVenues} />
        </div>
      </div>
    </div>
  );
};
// Bileşeni dışa aktar
export default Home;
