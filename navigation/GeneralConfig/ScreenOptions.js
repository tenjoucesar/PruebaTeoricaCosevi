import React from 'react'
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from 'Components/Buttons';

const SCREEN_GENERAL_OPTIONS = ({navigation,}) => ({
  headerStyle: { backgroundColor: 'black', borderBottomWidth: 2, },
  headerTitle: '',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="navicon"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="share-alt"
        onPress={async () => {
          try {
            const result = await Share.share({ message:'Comparte la App prueba Teórica con tus amigos'});

            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }}}
      />
    </HeaderButtons>
  ),
});

export default SCREEN_GENERAL_OPTIONS;