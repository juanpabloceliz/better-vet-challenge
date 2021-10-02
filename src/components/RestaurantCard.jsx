import React from "react"
import { Link } from "react-router-dom"

const RestaurantCard = ({
  restaurant: { name, rating, price_level, num_reviews, photo, location_id },
}) => {
  return (
    <li className="restaurant-card">
      {photo ? (
        <img
          src={photo.images.medium.url}
          alt={name}
          className="restaurant-card__image"
        />
      ) : (
        <div className="restaurant-card__default-image" />
      )}
      <h4>{name}</h4>
      <p>{num_reviews}</p>
      <p>{rating}⭐️</p>
      <p>{price_level}</p>
      <Link to={`/details/${location_id}`}>See more</Link>
    </li>
  )
}

export default RestaurantCard

// address: "154 Prospect St, Cambridge, MA 02139-1813"
// address_obj: {street1: "154 Prospect St", street2: "", city: "Cambridge", state: "MA", country: "United States",…}
// ancestors: [{subcategory: [{key: "city", name: "City"}], name: "Cambridge", abbrv: null, location_id: "60890"},…]
// awards: [{award_type: "CERTIFICATE_OF_EXCELLENCE", year: "2018",…},…]
// bearing: "west"
// booking: {provider: "Grubhub",…}
// category: {key: "restaurant", name: "Restaurant"}
// cuisine: [{key: "10659", name: "Asian"}, {key: "10661", name: "Korean"},…]
// description: ""
// dietary_restrictions: [{key: "10992", name: "Gluten Free Options"}]
// distance: "0.10023106308978692"
// distance_string: "0.1 km"
// doubleclick_zone: "na.us.ma.cambridge"
// establishment_types: [{key: "10591", name: "Restaurants"}]
// hours: {week_ranges: [[{open_time: 690, close_time: 1350}], [{open_time: 690, close_time: 1350}],…],…}
// is_candidate_for_contact_info_suppression: false
// is_closed: false
// is_jfy_enabled: false
// is_long_closed: false
// latitude: "42.36917"
// location_id: "323208"
// location_string: "Cambridge, Massachusetts"
// longitude: "-71.10111"
// name: "Koreana"
// nearest_metro_station: []
// num_reviews: "145"
// open_now_text: "Open Now"
// parent_display_name: "Cambridge"
// phone: "+1 617-576-8661"
// photo: {images: {,…}, is_blessed: true, uploaded_date: "2017-05-31T22:30:58-0400", caption: "",…}
// preferred_map_engine: "default"
// price: "$21 - $30"
// price_level: "$$ - $$$"
// ranking: "#61 of 439 Restaurants in Cambridge"
// ranking_category: "restaurant"
// ranking_denominator: "452"
// ranking_geo: "Cambridge"
// ranking_geo_id: "60890"
// ranking_position: "78"
// rating: "4.0"
// raw_ranking: "3.5527408123016357"
// reserve_info: {id: "323208", provider: "Grubhub",…}
// reviews: [{id: "744628302", lang: null, location_id: "0", published_date: "2021-10-02T12:25:29-04:00",…}]
// subcategory: [{key: "sit_down", name: "Sit down"}]
// timezone: "America/New_York"
// web_url: "https://www.tripadvisor.com/Restaurant_Review-g60890-d323208-Reviews-Koreana-Cambridge_Massachusetts.html"
// website: "http://www.koreanaboston.com/"
// write_review: "https://www.tripadvisor.com/UserReview-g60890-d323208-Koreana-Cambridge_Massachusetts.html"
