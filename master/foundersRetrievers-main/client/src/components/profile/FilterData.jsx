import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FoundCard, LostCard, RetrievedCard } from "../profile/CardsProfile";

export const FilterData = () => {
  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);
  const [dataFromThirdAPI, setDataFromThirdAPI] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const { user_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GET data from LOSTS
        const lostsResponse = await axios.get(
          `http://localhost:3000/losts?user_id=1`
        );
        setDataFromFirstAPI(lostsResponse.data);

        // GET data from FOUNDS
        const foundsResponse = await axios.get(
          `http://localhost:3000/Founds?user_id=1`
        );
        setDataFromSecondAPI(foundsResponse.data);
        const retrievedResponse = await axios.get(
          `http://localhost:3000/retrieved?user_id=1`
        );
        setDataFromThirdAPI(retrievedResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const combined = [];

    for (
      let i = 0;
      i <
      Math.max(
        dataFromFirstAPI.length,
        dataFromSecondAPI.length,
        dataFromThirdAPI.length
      );
      i++
    ) {
      if (dataFromFirstAPI[i]) {
        combined.push({ type: "losts", data: dataFromFirstAPI[i] });
      }

      if (dataFromSecondAPI[i]) {
        combined.push({ type: "found", data: dataFromSecondAPI[i] });
      }
      if (dataFromThirdAPI[i]) {
        combined.push({ type: "retrieved", data: dataFromThirdAPI[i] });
      }
    }

    setCombinedData(combined);
  }, [dataFromFirstAPI, dataFromSecondAPI, dataFromThirdAPI]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedDay, setSelectedDay] = useState("All");

  const [showMyLosts, setShowMyLosts] = useState(false);
  const [showMyFounds, setShowMyFounds] = useState(false);
  const [showMyAllPublishes, setShowMyAllPublishes] = useState(true);
  const [showMyRetrieved, setShowMyRetrieved] = useState(false);

  const [filteredData, setFilteredData] = useState(combinedData);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    const filteredData =
      category === "All"
        ? combinedData
        : combinedData.filter((item) => item.data.category === category);

    setFilteredData(filteredData);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);

    const filteredData =
      city === "All"
        ? combinedData
        : combinedData.filter((item) => item.data.city === city);

    setFilteredData(filteredData);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);

    const filteredData =
      day === "All"
        ? combinedData
        : combinedData.filter((item) => item.data.day === day);

    setFilteredData(filteredData);
  };
  const handleMyLostsClick = () => {
    const lostsData = combinedData.filter((item) => item.type === "losts");

    setFilteredData(lostsData);
    setShowMyLosts(true);
    setShowMyFounds(false);
    setShowMyRetrieved(false);
  };

  const handleMyFoundsClick = () => {
    const foundData = combinedData.filter((item) => item.type === "found");

    setFilteredData(foundData);
    setShowMyFounds(true);
    setShowMyLosts(false);
    setShowMyRetrieved(false);
  };
  const handleMyRetrievedClick = () => {
    const retrievedData = combinedData.filter(
      (item) => item.type === "retrieved"
    );

    setFilteredData(retrievedData);
    setShowMyFounds(false);
    setShowMyAllPublishes(false);
    setShowMyLosts(false);
    setShowMyRetrieved(true);
  };
  const handleMyAllPublishes = () => {
    setFilteredData(combinedData);
    setShowMyAllPublishes(true);
    setShowMyFounds(false);
    setShowMyLosts(false);
  };

  // Extract unique categories
  const uniqueCategories = [
    ...new Set(combinedData.map((item) => item.data.category)),
  ];

  // Extract unique cities
  const uniqueCities = [...new Set(combinedData.map((item) => item.data.city))];

  // Extract unique date
  const uniqueDay = [...new Set(combinedData.map((item) => item.data.day))];

  // PAGINATION //

  const ITEMS_PER_PAGE = 2;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* My Posts  */}
      <div className="flex flex-col">
        <div className="mt-16">
          <div className="text-[#000] font-light text-[0.9rem] flex gap-16 items-center">
            My Publishes{" "}
          </div>
          <hr className=" w-[44rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
          <div className="flex flex-row justify-center items-center gap-12 mb-28 mt-12">
            {/* Render your data based on the state of filters */}
            {showMyLosts &&
              currentItems.map((item) => (
                <LostCard
                  // user_id={filteredData.data.user_id}
                  title={item.data.title}
                  city={item.data.city}
                  day={item.data.day}
                />
              ))}
            {showMyFounds &&
              currentItems.map((item) => (
                <FoundCard
                  // user_id={filteredData.data.user_id}
                  title={item.data.title}
                  city={item.data.city}
                  day={item.data.day}
                />
              ))}

            {/*4$$$$$$$$$$$$$$ FILTER IS NOT APPLIED &&& when changing list to retrieved it becomes empty  $$$$$$$$$$$$ */}
            {!showMyFounds &&
              !showMyLosts &&
              !showMyRetrieved &&
              showMyAllPublishes &&
              currentItems.map((item) => (
                <>
                  {item.type === "losts" ? (
                    <LostCard
                      title={item.data.title}
                      city={item.data.city}
                      day={item.data.day}
                    />
                  ) : item.type === "found" ? (
                    <FoundCard
                      title={item.data.title}
                      city={item.data.city}
                      day={item.data.day}
                    />
                  ) : null}
                </>
              ))}
            {showMyRetrieved &&
              !showMyAllPublishes &&
              currentItems.map((item) => (
                <RetrievedCard
                  // user_id={filteredData.data.user_id}
                  uesrname={item.data.title}
                  description={item.data.description}
                />
              ))}
          </div>
        </div>

        {/* PAGINATION  */}

        <div class="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => paginate(currentPage - 1)}
              >
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                  href="#"
                  tabIndex="-1"
                >
                  Previous
                </a>
              </li>

              {Array.from(
                { length: Math.ceil(filteredData.length / ITEMS_PER_PAGE) },
                (_, index) => (
                  <li key={index} className="page-item">
                    <a
                      className={`page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 text-gray-800 focus:shadow-none ${
                        currentPage === index + 1 ? "bg-gray-200" : ""
                      }`}
                      href="#"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </a>
                  </li>
                )
              )}
              <li
                className="page-item"
                onClick={() => paginate(currentPage + 1)}
              >
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      
      {/* Filter  */}

      <div className="mt-12 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-l-[1.25rem] flex flex-col gap-4">
        <ul className="flex flex-col">
          {" "}
          Lists
          <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
          <li
            className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white"
            onClick={() => handleMyAllPublishes()}
          >
            My All Publishes
          </li>
          <li
            className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white"
            onClick={() => handleMyLostsClick()}
          >
            My Losts
          </li>
          <li
            className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center"
            onClick={() => handleMyFoundsClick()}
          >
            My Founds{" "}
          </li>
          <li
            className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center"
            onClick={() => handleMyRetrievedClick()}
          >
            Retrieved
          </li>
          {/* <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Donate
          </li> */}
          {/* <li className='text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
          {/* <li className='ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
        </ul>
        <ul className="flex flex-col mt-4">
          {" "}
          Filter by
          <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            <select
              id="category"
              onChange={(e) => handleCategoryChange(e.target.value)}
              value={selectedCategory}
              className="bg-transparent"
            >
              <option value="All">All Categories</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            <select
              id="city"
              onChange={(e) => handleCityChange(e.target.value)}
              value={selectedCity}
              className="bg-transparent"
            >
              <option value="All">City</option>
              {uniqueCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            <select
              id="city"
              onChange={(e) => handleDayChange(e.target.value)}
              value={selectedDay}
              className="bg-transparent"
            >
              <option value="All">Day</option>
              {uniqueDay.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </>
  );
};
