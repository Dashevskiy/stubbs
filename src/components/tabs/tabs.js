import React, {useState, useEffect} from 'react';
import './tabs.css';
import TabService from '../../services/service';
import Tab from '../tab/tab';

const Tabs = () => {
  const service = new TabService()

  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(service.getAllTabs())

    document.addEventListener('wheel', (e) => {
      document.getElementById('scroll_container').scrollLeft += e.deltaY;
      let target = document.getElementById("scroll_container");

    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let tabId = 0;
  const tab = tabs.map((tab) => {
    tabId++
    return <Tab key={tabId} tab={tab}/>
  })

  return (
    <ul id='scroll_container' className='tabs-container'>
      {tab}
    </ul>
  )
}

export default Tabs;