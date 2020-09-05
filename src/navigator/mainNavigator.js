import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings97641Navigator from '../features/Settings97641/navigator';
import UserProfile97639Navigator from '../features/UserProfile97639/navigator';
import ArticleList94442Navigator from '../features/ArticleList94442/navigator';
import ArticleList94441Navigator from '../features/ArticleList94441/navigator';
import ArticleList94440Navigator from '../features/ArticleList94440/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings97641: { screen: Settings97641Navigator },
UserProfile97639: { screen: UserProfile97639Navigator },
ArticleList94442: { screen: ArticleList94442Navigator },
ArticleList94441: { screen: ArticleList94441Navigator },
ArticleList94440: { screen: ArticleList94440Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
