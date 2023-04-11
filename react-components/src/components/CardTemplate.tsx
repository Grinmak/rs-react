import { Box, Button, Paper, styled, Card, CardMedia, Typography, Rating } from '@mui/material';

const CardWrapper = styled(Paper)`
  display: flex;
  width: 200px;
  flex-direction: column;
  padding: 10px;
`;

const ImgWrapper = styled(Card)`
  width: 100%;
  aspect-ratio: 1/1;
`;

const SelectColor = styled(Box)``;
const Description = styled(Box)`
  text-align: center;
`;
const Price = styled(Box)`
  display: flex;
  justify-content: space-around;
`;
const CartButton = styled(Button)``;

interface IProps {
  id: string;
  img: string;
  imgAlt: string;
  description: string;
  fullPrice: string;
  discountPrice: string;
  raiting: number;
}

const CardTemplate = (props: IProps) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <CardMedia sx={{ width: '100%', height: '100%' }} image={props.img} />
      </ImgWrapper>
      <SelectColor></SelectColor>
      <Box
        sx={{
          '& > legend': { mt: 2 },
          textAlign: 'center',
        }}
      >
        <Typography component="legend"></Typography>
        <Rating name="simple-controlled" value={props.raiting} />
      </Box>
      <Description>
        <Typography>{props.description}</Typography>
      </Description>
      <Price>
        <Box style={{ textDecoration: 'line-through' }}>{props.fullPrice}</Box>
        <Box>{props.discountPrice}</Box>
      </Price>
      <CartButton variant="outlined">Add to cart</CartButton>
    </CardWrapper>
  );
};

export default CardTemplate;
