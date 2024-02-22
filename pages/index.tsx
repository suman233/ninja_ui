import BannerAfterSec from "@/components/BannerAfterSec/BannerAfterSec";
import BannerSec from "@/components/BannerSec/BannerSec";
import FeatureSec from "@/components/FeatureSec/FeatureSec";
import Outdoor from "@/components/Outdoor/Outdoor";
import UseApp from "@/components/UseApp/UseApp";
import Wrapper from "@/layout/wrapper/Wrapper";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Wrapper>
      <BannerSec labelValue="Lorem Ipsum is simply dummy text">
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s.
        </Typography>
      </BannerSec>
      <BannerAfterSec />
      <UseApp />
      <FeatureSec />
      <Outdoor />
    </Wrapper>
  );
}
