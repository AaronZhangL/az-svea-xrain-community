import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import React from 'react';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

const TopBarComponent = () => {
  return (
    <div>
      <TopAppBar
        title='Translation Assistant'
        navigationIcon={<MaterialIcon
          icon='menu'
          onClick={() => console.log('click')}
        />}
        actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
      />
      <TopAppBarFixedAdjust>
        ......
      </TopAppBarFixedAdjust>
    </div>
  );
}

export default TopBarComponent
