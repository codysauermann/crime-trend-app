'use client'
import React, { use, useState } from 'react'
import { Checkbox } from './ui/checkbox'
import LineGraph from './LineGraphTrend3'

type Props = {filters:string[], data:any[]}
const TrendInterface: React.FC<Props> = ({filters, data}) => {

const [selectedFilters, setSelectedFilters] = useState({
    Violent: false,
    Property: false,
    Financial: false,
    Sexual: false
})

  const [trendData, setTrendData] = useState({});
  const [afterDate, setAfterDate] = useState('2010');
  const [beforeDate, setBeforeDate] = useState('2019');
  const [selectedDescent, setSelectedDescent] = useState('Other Asian');

  function handleInputChange(e) {
    console.log("e.type:");
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
        console.log("target.checked:");
        console.log(e.target.checked);
        console.log(e.target.name);
        
        // Use functional update for selectedFilters
        setSelectedFilters(prevSelectedFilters => {
            const updatedFilters = { ...prevSelectedFilters, [e.target.name]: e.target.checked };

            // Update trendData based on the updated filters
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                // Check the date range
                if (parseInt(data[i].year) >= parseInt(afterDate) && parseInt(data[i].year) <= parseInt(beforeDate)) {

                    let dataEntry = { year: data[i].year };

                    let violent = '';
                    let property = '';
                    let financial = '';
                    let sexual = '';

                    switch (selectedDescent)
                    {
                        case "Other Asian":
                            {
                                violent = 'd1';
                                property = 'd20';
                                financial = 'd39';
                                sexual = 'd58';
                                break;
                            }
                        case "Black":
                            {
                                violent = 'd2';
                                property = 'd21';
                                financial = 'd40';
                                sexual = 'd59';
                                break;
                            }
                        case "Chinese":
                            {
                                violent = 'd3';
                                property = 'd22';
                                financial = 'd41';
                                sexual = 'd60';
                                break;
                            }
                        case "Cambodian":
                            {
                                violent = 'd4';
                                property = 'd23';
                                financial = 'd42';
                                sexual = 'd61';
                                break;
                            }
                        case "Filipino":
                            {
                                violent = 'd5';
                                property = 'd24';
                                financial = 'd43';
                                sexual = 'd62';
                                break;
                            }
                        case "Guamanian":
                            {
                                violent = 'd6';
                                property = 'd25';
                                financial = 'd44';
                                sexual = 'd63';
                                break;
                            }
                        case "Hispanic/Latin/Mexican":
                            {
                                violent = 'd7';
                                property = 'd26';
                                financial = 'd45';
                                sexual = 'd64';
                                break;
                            }
                        case "American Indian/Alaskan Native":
                            {
                                violent = 'd8';
                                property = 'd27';
                                financial = 'd46';
                                sexual = 'd65';
                                break;
                            }
                        case "Japanese":
                            {
                                violent = 'd9';
                                property = 'd28';
                                financial = 'd47';
                                sexual = 'd66';
                                break;
                            }
                        case "Korean":
                            {
                                violent = 'd10';
                                property = 'd29';
                                financial = 'd48';
                                sexual = 'd67';
                                break;
                            }
                        case "Laotian":
                            {
                                violent = 'd11';
                                property = 'd30';
                                financial = 'd49';
                                sexual = 'd68';
                                break;
                            }
                        case "Other":
                            {
                                violent = 'd12';
                                property = 'd31';
                                financial = 'd50';
                                sexual = 'd69';
                                break;
                            }
                        case "Pacific Islander":
                            {
                                violent = 'd13';
                                property = 'd32';
                                financial = 'd51';
                                sexual = 'd70';
                                break;
                            }
                        case "Samoan":
                            {
                                violent = 'd14';
                                property = 'd33';
                                financial = 'd52';
                                sexual = 'd71';
                                break;
                            }
                        case "Hawaiian":
                            {
                                violent = 'd15';
                                property = 'd34';
                                financial = 'd53';
                                sexual = 'd72';
                                break;
                            }
                        case "Vietnamese":
                            {
                                violent = 'd16';
                                property = 'd35';
                                financial = 'd54';
                                sexual = 'd73';
                                break;
                            }
                        case "White":
                            {
                                violent = 'd17';
                                property = 'd36';
                                financial = 'd55';
                                sexual = 'd74';
                                break;
                            }
                        case "Unknown":
                            {
                                violent = 'd18';
                                property = 'd37';
                                financial = 'd56';
                                sexual = 'd75';
                                break;
                            }
                        case "Asian Indian":
                            {
                                violent = 'd19';
                                property = 'd38';
                                financial = 'd57';
                                sexual = 'd76';
                                break;
                            }
                    }


                    // Add data based on selected filters
                    if (updatedFilters.Violent) {
                        dataEntry = { ...dataEntry, d1: data[i][violent]};
                    }
                    if (updatedFilters.Property) {
                        dataEntry = { ...dataEntry, d2: data[i][property]};
                    }
                    if (updatedFilters.Financial) {
                        dataEntry = { ...dataEntry, d3: data[i][financial]};
                    }
                    if (updatedFilters.Sexual) {
                        dataEntry = { ...dataEntry, d4: data[i][sexual]};
                    }

                    // Add dataEntry to newData if any filter was selected
                    if (updatedFilters.Violent || updatedFilters.Property || updatedFilters.Financial || updatedFilters.Sexual) {
                        newData.push(dataEntry);
                    }
                }
            }
            
            // Update trendData with newData
            setTrendData(newData);
            
            // Return updated filters at the end
            return updatedFilters;
        });
    }
  }


  const handleAfterDateChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setAfterDate(e.currentTarget.value);
    let newData = [];
    
    for(let i = 0; i < data.length; i++) {
      if(parseInt(data[i].year) >= parseInt(e.target.value) && parseInt(data[i].year) <= parseInt(beforeDate)) {
        newData.push(data[i]);
      }
    }
    setTrendData(newData);
  }

  const handleBeforeDateChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setBeforeDate(e.currentTarget.value);
    let newData = [];
    
    for(let i = 0; i < data.length; i++) {
      if(parseInt(data[i].year) >= parseInt(afterDate) && parseInt(data[i].year) <= parseInt(e.target.value)) {
        newData.push(data[i]);
      }
    }
    setTrendData(newData);
  }

  return (
    <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
          <LineGraph
          trendData={trendData}/>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <select defaultValue={afterDate} onChange={(e) => handleAfterDateChange(e)} className='p-2'>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
          <div className='text-center text-lg content-center font-normal'>to</div>
          <select defaultValue={beforeDate} onChange={(e) => handleBeforeDateChange(e)} className='p-2'>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>

        </div>
        <div className={'grid grid-cols-2 gap-8 p-9'}>
            <div className="flex flex-col">
                <label htmlFor="selectedDescent" className="text-gray-700 text-sm font-medium mb-2 text-center">Selected Descent</label> {}
                <select id="selectedDescent"
                        defaultValue={selectedDescent}
                        className="border border-gray-300 rounded-md p-2 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={e => setSelectedDescent(e.target.value)}> {}
                    <option value="Other Asian">Other Asian</option>
                    <option value="Black">Black</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Cambodian">Cambodian</option>
                    <option value="Filipino">Filipino</option>
                    <option value="Guamanian">Guamanian</option>
                    <option value="Hispanic/Latin/Mexican">Hispanic/Latin/Mexican</option>
                    <option value="American Indian/Alaskan Native">American Indian/Alaskan Native</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Laotian">Laotian</option>
                    <option value="Other">Other</option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="Samoan">Samoan</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="White">White</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Asian Indian">Asian Indian</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="selectedCrime">Selected Crime</label> {}
                {filters.map((filter, idx) => (
                    <div key={idx} className="items-top flex space-x-2">
                        <input type="checkbox" id={filter} name={filter} onClick={(e) => handleInputChange(e)}/>
                        <label htmlFor={filter} className="text-md font-medium leading-none">
                        {filter}
                </label>
            </div>
          ))}
            </div>
        </div>

      </div>
  )
}

export default TrendInterface