import Wrapper from "../components/Wrapper";
import privacyImg from "../icons/privacy_policy.svg";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { fetchTerms } from "../store/actions/termsAction";

const Privacy: React.FC = () => {
  const dispatch = useAppDispatch();
  const { terms, loading, error } = useAppSelector((state) => state.terms);
  useEffect(() => {
    fetchTerms()(dispatch);
  }, [dispatch]);
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {terms && (
        <>
          <Wrapper>
            <div className="w-full  my-20 flex flex-col lg:flex-row justify-between items-start">
              <div className="w-full lg:w-2/5 pr-4 mb-16">
                <img src={privacyImg} alt="" className="w-full" />
              </div>
              <div className="w-full lg:w-3/5">
                <h2 className="font-main font-medium text-black text-4xl sm:text-5xl">
                  Terms and Condition
                </h2>
                <p className="font-main font-normal text-black  text-lg mb-7 mt-2">
                  Last Modified:
                  <span className="text-yellow">{terms.updated_at}</span>
                </p>
                <h3 className="font-main font-medium text-black text-center text-2xl sm:text-4xl mb-7">
                  SCOPE OF THIS TERMS
                </h3>
                <p className="font-main font-normal text-black text-sm sm:text-xl mb-5">
                  {terms.description}
                </p>
                <p className="font-main font-normal text-black text-sm sm:text-xl mb-5">
                  {terms.description}
                </p>
              </div>
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Privacy;
