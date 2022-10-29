import PropTypes from 'prop-types';
import {
   Text,
   Group,
   Image,
   Paper,
} from "@mantine/core";
import { getIconPath } from "constants";

const BookmarksItem = ({
  url,
  title,
  isEditMode,
  setEditMode,
}) => {

  return (
    <Paper
      component="a"
      href={url}
      p="sm"
      sx={({ shadows }) => ({
        '&:hover': {
          boxShadow: shadows.md,
        },
      })}
    >
      <Group noWrap sx={{ pointerEvents: 'none' }}>
        <Image
          src={getIconPath(url)}
          width={24}
          height={24}
          fit="contain"
        />
        <Text
          lineClamp={1}
          weight={500}
          size="sm"
          sx={{
            pointerEvents: isEditMode ? 'none' : 'initial',
          }}
        >
          {title}
        </Text>
      </Group>
    </Paper>
  );
}

BookmarksItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default BookmarksItem;
