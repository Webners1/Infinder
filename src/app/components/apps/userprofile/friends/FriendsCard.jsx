import Avatar from '@mui/material/Avatar';
import { Grid, Rating, Box, Stack } from '@mui/material';
// import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import BlankCard from '../../../../components/shared/BlankCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollwores } from '@/store/apps/userProfile/UserProfileSlice';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconSearch,
} from '@tabler/icons-react';
import MuiRating from '@/app/(DashboardLayout)/ui-components/rating/page';
import InlineItemCard from '@/app/components/shared/InlineItemCard';

const SocialIcons = [
  {
    name: 'Facebook',
    icon: <IconBrandFacebook size="18" color="#1877F2" />,
  },
  {
    name: 'Instagram',
    icon: <IconBrandInstagram size="18" color="#D7336D" />,
  },
  {
    name: 'Github',
    icon: <IconBrandGithub size="18" color="#006097" />,
  },
  {
    name: 'Twitter',
    icon: <IconBrandTwitter size="18" color="#1C9CEA" />,
  },
];

const FriendsCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFollwores());
  }, [dispatch]);

  const filterFriends = (friends, cSearch) => {
    if (friends)
      return friends.filter((t) =>
        t.name.toLocaleLowerCase().includes(cSearch.toLocaleLowerCase()),
      );

    return friends;
  };
  const [search, setSearch] = React.useState('');
  const getFriends = useSelector((state) =>
    filterFriends(state.userpostsReducer.followers, search),
  );

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={12} lg={12}>
          <Stack direction="row" alignItems={'center'} mt={2}>
            <Box>
              <Typography variant="h3">
                Influincers &nbsp;
                <Chip label={getFriends.length} color="secondary" size="small" />
              </Typography>
            </Box>
            <Box ml="auto">
              <TextField
                id="outlined-search"
                placeholder="Search Influincers"
                size="small"
                type="search"
                variant="outlined"
                inputProps={{ 'aria-label': 'Search Influincers' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size="14" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
              />
            </Box>
          </Stack>
        </Grid>
        {getFriends.map((profile) => {
          return (
            <Grid item sm={12} lg={4} key={profile.id}>
              <BlankCard className="hoverCard">
                <CardContent>
                  <Stack direction={'column'} gap={2} alignItems="center">
                    <Avatar
                      alt="Remy Sharp" s
                      src={profile.avatar}
                      sx={{ width: '80px', height: '80px' }}
                    />
                    <Box textAlign={'center'}>
                      <Typography variant="h5">{profile.name}</Typography>


                    </Box>
                  </Stack>
                </CardContent>
                <Divider />
                <Box p={2} py={1} textAlign={'center'} sx={{ backgroundColor: 'grey.100' }}>
                  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box width={'50%'}>
                      <Rating name="read-only" value={5} />
                    </Box>
                    <Box width={'50%'}>
                      {SocialIcons.map((sicon) => {
                        return <IconButton key={sicon.name}>{sicon.icon}</IconButton>;
                      })}
                    </Box>
                  </Box>
                  <InlineItemCard>
                    {/* <Chip label="Default Filled" /> */}
                    {/* <Chip avatar={<Avatar>M</Avatar>} label="Default Deletable" onDelete={handleDelete} /> */}
                    <Chip variant="outlined" label="DeFi" color="primary" />
                    {/* <Chip avatar={<Avatar alt="Natacha" src={"/images/profile/user-4.jpg"} />} label="Primary Deletable" color="primary" onDelete={handleDelete} /> */}
                    <Chip variant="outlined" label="GameFi" color="secondary" />
                    {/* <Chip icon={<IconMoodHappy />} label="Secondary Deletable" color="secondary" onDelete={handleDelete} /> */}
                    <Chip variant="outlined" label="Mini-Apps" color="success" />
                    {/* <Chip avatar={<Avatar alt="Natacha" src={"/images/profile/user-2.jpg"} />} label="Default Deletable" color="success" onDelete={handleDelete} /> */}
                    <Chip variant="outlined" label="More..." color="warning" />
                    {/* <Chip icon={<IconMoodHappy />} label="Default Deletable" color="warning" onDelete={handleDelete} /> */}
                    {/* <Chip label="Default Filled" color="error" /> */}
                    {/* <Chip avatar={<Avatar alt="Natacha" src={"/images/profile/user-3.jpg"} />} label="Default Deletable" color="error" onDelete={handleDelete} /> */}
                  </InlineItemCard>
                  {/* <Box textAlign={'center'} display={"flex"} justifyContent={'space-around'} gap={'1rem'} margin={'0.5rem 0rem'}>
                    <Typography fontSize={'12.5px'} backgroundColor={"green"} variant="semi-bold"  padding={'0.1rem 0.5rem'} borderRadius={'1rem'} >DeFi</Typography>
                    <Typography fontSize={'12.5px'} variant="semi-bold" backgroundColor={'orange'} padding={'0.1rem 0.5rem'} borderRadius={'1rem'} >GameFi</Typography>
                    <Typography fontSize={'12.5px'} variant="semi-bold" backgroundColor={'teal'} padding={'0.1rem 0.5rem'} borderRadius={'1rem'} >Mini-Apps</Typography>
                    <Typography fontSize={'12.5px'} variant="semi-bold" backgroundColor={'teal'} padding={'0.1rem 0.5rem'} borderRadius={'1rem'} >More...</Typography>
                  </Box> */}

                </Box>
              </BlankCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FriendsCard;
