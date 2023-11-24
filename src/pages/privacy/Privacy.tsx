import privacyImg from "../../icons/privacy_policy.svg";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchPrivacy } from "../../store/actions/privacyAction";
import Loading from "../../components/loading/Loading";
import "./privacy.css";
import moment from "moment";

const Privacy: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const dispatch = useAppDispatch();
  const { privacy, loading, error } = useAppSelector((state) => state.privacy);
  useEffect(() => {
    fetchPrivacy()(dispatch);
  }, [dispatch]);
  useEffect(() => {
    if (privacy) {
      const parsedDate = moment(privacy.updated_at);

      const formattedDateTime = parsedDate.format("DD/MM/YYYY HH:mm:ss");

      setFormattedDate(formattedDateTime);
    }
  }, [privacy]);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {privacy && (
        <>
          <div className="container">
            <div className="pricacy">
              <div className="privacy_img">
                <img src={privacyImg} alt="" />
              </div>
              <div className="privacy_text">
                <h2>PRIVACY POLICY</h2>
                <p>
                  Last Modified:
                  <span>{formattedDate}</span>
                </p>
                <h3>SCOPE OF THIS POLICY</h3>
                <p>{privacy.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Privacy;
