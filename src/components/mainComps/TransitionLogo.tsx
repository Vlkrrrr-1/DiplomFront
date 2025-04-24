import PageBox from "../UI/boxes/PageBox";
import CustomLogo from "../UI/logo/CustomLogo";
import CustomLogoText from "../UI/logo/CustomLogoText";

const TransitionLogo = () => {
  return (
    <PageBox sx={{ padding: "40px 0", flexDirection: "row", gap: "10px" }}>
      <CustomLogo />
      <CustomLogoText />
    </PageBox>
  );
};

export default TransitionLogo;
