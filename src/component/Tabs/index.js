import React from 'react';
import { Tab, Box, Button } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useStyles } from '../../constant/customStyle';

const CustomTabs = ({ tabs, tabsPanel, isLeftSidebarOpen }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box
			key={'CustomTabs'}
			sx={{
				// width: { xs: "100%", lg: value === "3" ? "135%" : "557px" },
				width: {
					xs: '100%',
					lg: value === '3' ? (isLeftSidebarOpen ? '135%' : '557px') : '557px',
				},
				padding: '32px 0px',
			}}
		>
			<TabContext key={'TabContext'} value={value}>
				<Box key={'tabs'} sx={{ display: 'flex', width: '100%' }}>
					<TabList
						onChange={handleChange}
						aria-label='lab API tabs example'
						className={classes.tabs}
						classes={{ indicator: classes.indicator }}
					>
						{tabs.map((tab, index) => {
							return (
								<Tab
									sx={{
										color: tab?.value === value ? '#FF8200 !important' : '#fff',
									}}
									label={tab.name}
									value={tab.value}
									className={classes.label}
									key={`tablist-tab-${tab.value}`}
								/>
							);
						})}
					</TabList>
				</Box>
				{tabsPanel.map((tab, index) => {
					return (
						<TabPanel
							value={tab.value}
							className={classes.tabsPanel}
							sx={tab.sx}
							key={`tab-panel-${index}`}
						>
							{typeof tab.component === 'function'
								? tab.component()
								: tab.component}
						</TabPanel>
					);
				})}
			</TabContext>
		</Box>
	);
};

export default CustomTabs;
