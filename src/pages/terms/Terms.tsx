import privacyImg from "../../icons/privacy_policy.svg";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import Loading from "../../components/loading/Loading";
import { fetchTerms } from "../../store/actions/termsAction";
import "../privacy/privacy.css";
import moment from "moment";

const Privacy: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState("");

  const dispatch = useAppDispatch();
  const { terms, loading, error } = useAppSelector((state) => state.terms);
  useEffect(() => {
    fetchTerms()(dispatch);
  }, [dispatch]);
  useEffect(() => {
    if (terms) {
      const parsedDate = moment(terms.updated_at);

      const formattedDateTime = parsedDate.format("DD/MM/YYYY HH:mm:ss");

      setFormattedDate(formattedDateTime);
    }
  }, [terms]);

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
                  <span>{formattedDate}</span>
                </p>
                <h3>SCOPE OF THIS TERMS</h3>
                <p  dangerouslySetInnerHTML={{ __html: terms.description }}></p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Privacy;
