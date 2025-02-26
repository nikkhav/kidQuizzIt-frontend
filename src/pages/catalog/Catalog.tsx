import React, { useCallback, useEffect, useRef, useState } from "react";
import { allData } from "../../types/allData";
import SearchInput from "../../components/searchInput/SearchInput";
import { Link, useParams } from "react-router-dom";
import "./catalog.css";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import DifferenceCard from "../../components/differenceCard/DifferenceCard";
import WhyCard from "../../components/whyCard/WhyCard";
import QuizCard from "../../components/quizCard/QuizCard";
import ColouringCard from "../../components/colouringCard/ColouringCard";
import TaleCard from "../../components/taleCard/TaleCard";
import GameCard from "../../components/gameCard/GameCard";
import axios from "../../axios";
import TourCard from "../../components/tourCard/TourCard";
import ArtsAndCraftCard from "../../components/artsAndCraftsCard/ArtsAndCraftsCard.tsx";

const Catalog: React.FC = () => {
  const params = useParams();
  const catId = params.id ? params.id : "";
  const catParentId = params.parentId ? params.parentId : "";
  const [currretCat, setCurrentCat] = useState<number | null>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [prod, setProd] = useState<allData[]>([]);
  const [filteredProd, setFilteredProd] = useState<allData[]>([]);

  const [quizzes, setQuizzes] = useState<allData[] | null>(null);
  const [colourings, setColourings] = useState<allData[] | null>(null);
  const [differences, setDifferences] = useState<allData[] | null>(null);
  const [whyQuestions, setWhyQuestions] = useState<allData[] | null>(null);
  const [fairyTales, setFairyTales] = useState<allData[] | null>(null);
  const [games, setGames] = useState<allData[] | null>(null);
  const [tours, setTours] = useState<allData[] | null>(null);
  const [artsAndCrafts, setArtsAndCrafts] = useState<allData[] | null>(null);

  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const handleCityChange = (event: any) => {
    const value = event.target.value;
    setSelectedCities((prevSelected: any) =>
      prevSelected.includes(value)
        ? prevSelected.filter((city: any) => city !== value)
        : [...prevSelected, value],
    );
  };

  const getAllData = async () => {
    try {
      let quizRes,
        colouringRes,
        differenceRes,
        whyRes,
        fairyRes,
        gameRes,
        tourRes,
        artsAndCraftsRes;

      if (catParentId === "1") {
        quizRes = await axios.get("quiz");
        setQuizzes(quizRes.data);
      }
      if (catParentId === "2") {
        colouringRes = await axios.get("colouring");
        setColourings(colouringRes.data);
      }
      if (catParentId === "3") {
        whyRes = await axios.get("whyquestion");
        setWhyQuestions(whyRes.data);
      }
      if (catParentId === "4") {
        differenceRes = await axios.get("difference");
        setDifferences(differenceRes.data);
      }
      if (catParentId === "40") {
        fairyRes = await axios.get("tale");
        setFairyTales(fairyRes.data);
      }
      if (catParentId === "41") {
        gameRes = await axios.get("game");
        setGames(gameRes.data);
      }
      if (catParentId === "52") {
        tourRes = await axios.get("tour");
        setTours(tourRes.data);
        collectCountriesAndCities(tourRes.data);
      }
      if (catParentId === "58") {
        artsAndCraftsRes = await axios.get("arts_and_crafts");
        setArtsAndCrafts(artsAndCraftsRes.data);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const collectCountriesAndCities = (tours: any[]) => {
    const countriesMap: any = {};
    tours.forEach((tour) => {
      const country = tour.city.country;
      if (!countriesMap[country.id]) {
        countriesMap[country.id] = {
          ...country,
          cities: [],
        };
      }
      countriesMap[country.id].cities.push(tour.city);
    });
    setCountries(Object.values(countriesMap));
  };

  const setAllData = () => {
    if (
      quizzes ||
      colourings ||
      differences ||
      whyQuestions ||
      fairyTales ||
      games ||
      tours ||
      artsAndCrafts
    ) {
      let prods: allData[] = [];
      if (quizzes) prods = [...prods, ...quizzes];
      if (colourings) prods = [...prods, ...colourings];
      if (differences) prods = [...prods, ...differences];
      if (whyQuestions) prods = [...prods, ...whyQuestions];
      if (fairyTales) prods = [...prods, ...fairyTales];
      if (games) prods = [...prods, ...games];
      if (tours) prods = [...prods, ...tours];
      if (artsAndCrafts) prods = [...prods, ...artsAndCrafts];

      if (catId && catParentId) {
        const newArr = prods.filter(
          (a) =>
            a.category.parent_id === +catParentId && a.category_id === +catId,
        );
        const shuffledProds = newArr.sort(() => Math.random() - 0.5);
        setProd(shuffledProds);
        setFilteredProd(shuffledProds);
        return;
      } else {
        const shuffledProds = prods.sort(() => Math.random() - 0.5);
        setProd(shuffledProds);
        setFilteredProd(shuffledProds);
      }
    }
  };

  useEffect(() => {
    getAllData();
  }, [catParentId]);

  useEffect(() => {
    setAllData();
  }, [
    quizzes,
    colourings,
    differences,
    whyQuestions,
    fairyTales,
    games,
    tours,
    artsAndCrafts,
    catId,
    catParentId,
  ]);

  useEffect(() => {
    if (selectedCities.length > 0) {
      const filtered = prod.filter((item: any) =>
        selectedCities.includes(item.city.name),
      );
      setFilteredProd(filtered);
    } else {
      setFilteredProd(prod);
    }
  }, [selectedCities, prod]);

  const searchProd = (value: string) => {
    const newProd: allData[] = [];
    quizzes?.forEach((a) => {
      if (a.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        newProd.push(a);
      }
    });
    colourings?.forEach((a) => {
      if (
        a.category.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ) {
        newProd.push(a);
      }
    });
    differences?.forEach((a) => {
      if (
        a.category.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ) {
        newProd.push(a);
      }
    });
    whyQuestions?.forEach((a) => {
      if (a.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        newProd.push(a);
      }
    });
    setFilteredProd(newProd);
  };

  const dropRef = useRef(null);
  useClickOutSide(dropRef, () => {
    setCurrentCat(null);
  });

  return (
    <>
      {filteredProd.length > 0 ? (
        <>
          <div
            className={`container ${
              catParentId === "52" ? "catalog-tour-row" : ""
            }`}
          >
            {catParentId === "52" && (
              <div className="city-filter-container">
                {countries.map((country) => (
                  <div key={country.id} className="country">
                    <label>{country.name}</label>
                    {Array.from(
                      new Set(country.cities.map((city: any) => city.name)),
                    ).map((cityName) => {
                      const city = country.cities.find(
                        (c: any) => c.name === cityName,
                      );
                      return (
                        <div key={city.id} className="city">
                          <input
                            type="checkbox"
                            id={city.name}
                            value={city.name}
                            onChange={handleCityChange}
                          />
                          <label htmlFor={city.name}>{city.name}</label>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            <div
              className={`${catParentId === "52" ? "catalog-tour-col" : ""}`}
            >
              <SearchInput searchProd={searchProd} />
              <div className="catalog">
                <div className="catalog_container">
                  {filteredProd.map((card: any) => {
                    if (card.category.parent_id === 4) {
                      return (
                        <DifferenceCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id === 3) {
                      return (
                        <WhyCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id === 1) {
                      return (
                        <QuizCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id === 40) {
                      return (
                        <TaleCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id === 41) {
                      return (
                        <GameCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id === 2) {
                      return (
                        <ColouringCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id === 52) {
                      return (
                        <TourCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id === 58) {
                      return (
                        <ArtsAndCraftCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="no_card">
          <h2>There are no cards in this category</h2>
          <Link
            style={{
              marginTop: "20px",
            }}
            to={"/"}
          >
            Go to the main page
          </Link>
        </div>
      )}
    </>
  );
};

export default Catalog;
