import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import privacyImg from "../icons/privacy_policy.svg";

const Privacy = () => {
  const params = useParams();
  const name = params.name == "policy" ? "policy" : "terms";
  return (
    <Wrapper>
      <div className="w-full my-20 flex justify-between items-start">
        <div className="w-1/3 pr-4">
          <img src={privacyImg} alt="" className="w-full" />
        </div>
        <div className="w-2/3">
          <h2 className="font-main font-medium text-black text-6xl">
            {name == "terms" ? "TERMS OF USE" : "PRIVACY POLICY"}
          </h2>
          <p className="font-main font-normal text-black text-xl mb-7 mt-1">
            Last Modified: <span className="text-yellow">09/20/2023</span>
          </p>
          <h3 className="font-main font-medium text-black text-2xl mb-10">
            {name == "terms" ? "SCOPE OF THIS TERMS" : "SCOPE OF THIS POLICY"}
          </h3>
          <p className="font-main font-normal text-black text-xl mb-5">
            This privacy policy describes the processing of information provided
            or collected on the sites and applications where this privacy policy
            is posted, whether on our digital properties or on applications we
            make available on third-party sites or platforms. It also describes
            the processing of guest information provided to us or collected by
            us offline in our physical properties, such as in our stores, theme
            parks, resorts, and cruise ships, or through our guest call centers.
            We follow this privacy policy in accordance with applicable law in
            the places where we operate. In some cases, we may provide
            additional data privacy notices specific to certain products,
            practices, or regions. Those terms are to be read in conjunction
            with this policy.
          </p>
          <p className="font-main font-normal text-black text-xl mb-5">
            Please keep in mind that when you provide information to us on a
            third-party site or platform (for example, via our applications),
            the information you provide may be separately collected by the
            third-party site or platform. The information we collect is covered
            by this privacy policy, and the information the third-party site or
            platform collects is subject to the third-party site or platform’s
            privacy practices. Privacy choices you have made on the third-party
            site or platform will not apply to our use of the information we
            have collected directly through our applications. Please also keep
            in mind that our sites and applications may contain links to other
            sites not owned or controlled by us and we are not responsible for
            the privacy practices of those sites. We encourage you to be aware
            when you leave our sites or applications and to read the privacy
            policies of other sites that may collect your personal information.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Privacy;
