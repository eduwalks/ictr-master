import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Tab, Tabs, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ChartTabCont1 from 'custom/components/chart/ChartTabCont1';
import ChartTabCont2 from 'custom/components/chart/ChartTabCont2';
import ChartTabCont3 from 'custom/components/chart/ChartTabCont3';

// assets
// import { BookOutlined, FileImageOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';

// ==============================|| TAB PANEL ||============================== //

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| TABS - ICON ||============================== //

export default function ChartTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard style={{marginTop:"10px"}}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="전동기" {...a11yProps(0)} />
            <Tab label="송풍기" {...a11yProps(1)} />
            <Tab label="V밸트" {...a11yProps(2)} />
            {/* <Tab label="Gallery" icon={<FileImageOutlined />} iconPosition="start" {...a11yProps(3)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h6">
            <ChartTabCont1 />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h6">
            <ChartTabCont2 />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h6">
            <ChartTabCont3 />
          </Typography>
        </TabPanel>
        {/* <TabPanel value={value} index={3}>
          <Typography variant="h6">
            4444
          </Typography>
        </TabPanel> */}
      </Box>
    </MainCard>
  );
}
