/* eslint-disable react/no-array-index-key */
import { fetchCmsList } from "@/api/functions/cms.api";
import { cardList } from "@/json/mock/cardlist.mock";
import { primaryColors } from "@/themes/_muiPalette";
import ClientIcon from "@/ui/Icons/ClientIcon";
import InfoIcon from "@/ui/Icons/InfoIcon";
import TrustIcon from "@/ui/Icons/TrustIcon";
import styled from "@emotion/styled";
import { CardActionArea } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

export const BannerAfterSecWrapper = styled(Box)`
  padding-top: 150px;
  position: relative;
  z-index: 10;
  @media (max-width: 1499px) {
    padding-top: 100px;
  }
  @media (max-width: 899px) {
    padding-top: 80px;
  }
`;
export const EachCardWrapper = styled(Box)`
  padding: 80px 30px;
  background: ${primaryColors?.color383838};
  box-shadow: 0px 14.19px 43.66px rgba(0, 0, 0, 0.13);
  border-radius: 15px;
  @media (max-width: 899px) {
    padding: 30px 30px;
    margin-top: 20px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .poly_gon {
    margin-bottom: 50px;
    margin-top: -115px;
    @media (max-width: 899px) {
      margin-bottom: 0px;
      margin-top: -60px;
    }
  }
`;

interface cardProps extends BoxProps {
  title: string;
  slug: string;
  icon: React.ReactNode;
}


export const EachCard: React.FC<cardProps & BoxProps> = ({
  title,
  slug,
  icon,
  ...props
}) => {
  return (
    <EachCardWrapper {...props}>
      <Typography variant="caption" className="poly_gon">
        {icon}
      </Typography>
        <Typography variant="h3" component={Link} href={`${slug}`==='how-to-use' ? `/howtouse/${slug}`: `/${slug}`}>{title}</Typography>
      <Typography>{slug}</Typography>
    </EachCardWrapper>
  );
};

interface props extends BoxProps {}

const BannerAfterSec: React.FC<props & BoxProps> = ({ ...props }) => {
  const router=useRouter()

  const cardList = [
    {
      icon: <InfoIcon />,
      title: "Detailed Information",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      icon: <ClientIcon />,
      title: "Satisfied Clients",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      icon: <TrustIcon />,
      title: "Trustworthy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];

  const { isLoading, data, error } = useQuery({
    queryKey: ["cmslists"],
    queryFn: fetchCmsList,
  });

  return (
    <BannerAfterSecWrapper {...props}>
      <Container fixed>
        <Grid
          container
          columnSpacing={{ md: 4, xs: 0 }}
          rowSpacing={{ md: 0, xs: 3 }}
        >
          {Array.isArray(data)
            ? data?.map((data, index) => (
                <Grid item md={4} xs={12} key={index}>
                  <EachCard {...data} />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </BannerAfterSecWrapper>
  );
};

export default BannerAfterSec;
