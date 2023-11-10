import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import privacyImg from "../icons/privacy_policy.svg";
import React from "react";
import { connect } from "react-redux";
import { PolicyTermsData } from "../types/PolicyTermsData";

type PrivacyProps = {
  policy?: PolicyTermsData;
  terms?: PolicyTermsData;
};
const Privacy: React.FC<PrivacyProps> = ({ policy, terms }) => {
  const params = useParams();
  const name = params.name == "policy" ? "policy" : "terms";
  const data = name == "policy" ? policy : terms;
  return (
    <>
      {data && (
        <>
          <Wrapper>
            <div className="w-full  my-20 flex flex-col lg:flex-row justify-between items-start">
              <div className="w-full lg:w-2/5 pr-4 mb-16">
                <img src={privacyImg} alt="" className="w-full" />
              </div>
              <div className="w-full lg:w-3/5">
                <h2 className="font-main font-medium text-black text-4xl sm:text-5xl">
                  {name == "terms" ? "TERMS OF USE" : "PRIVACY POLICY"}
                </h2>
                <p className="font-main font-normal text-black  text-lg mb-7 mt-2">
                  Last Modified:{" "}
                  <span className="text-yellow">{data.updated_at}</span>
                </p>
                <h3 className="font-main font-medium text-black text-center text-2xl sm:text-4xl mb-7">
                  {name == "terms"
                    ? "SCOPE OF THIS TERMS"
                    : "SCOPE OF THIS POLICY"}
                </h3>
                <p className="font-main font-normal text-black text-sm sm:text-xl mb-5">
                  {data.description}
                </p>
                <p className="font-main font-normal text-black text-sm sm:text-xl mb-5">
                  {data.description}
                </p>
              </div>
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

const t = (a: any) => a;
export default connect(t)(Privacy);
