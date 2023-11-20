import privacyImg from "../../icons/privacy_policy.svg";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import Loading from "../../components/loading/Loading";
import { fetchTerms } from "../../store/actions/termsAction";
import "../privacy/privacy.css";

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
          <div className="container">
            <div className="pricacy">
              <div className="privacy_img">
                <img src={privacyImg} alt="" />
              </div>
              <div className="privacy_text">
                <h2>Terms and Condition</h2>
                <p>
                  Last Modified:
                  <span>{terms.updated_at}</span>
                </p>
                <h3>SCOPE OF THIS TERMS</h3>
                <p>{terms.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Privacy;
