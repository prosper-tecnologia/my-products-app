import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface Props {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
}

export function ProductCard({ title, description, thumbnail, id }: Props) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate('/auth/products/' + id)} size="small">Ver mais</Button>
      </CardActions>
    </Card>
  );
}
