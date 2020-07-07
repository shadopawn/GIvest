import React,  { useState } from 'react'
import LeaderboardRow from './LeaderboardRow'

export default function Leaderboard() {

    const [rows] = useState([
        {position: 1, dollarAmmount:100.00, name:"Japperales", charity:"Red Cross", linkURL:"https://www.w3schools.com/html/html_links.asp"},
        {position: 2, dollarAmmount:75.00, name:"Delitt", charity:"ASPCA", linkURL:"https://www.w3schools.com/html/html_links.asp"},
        {position: 3, dollarAmmount:63.00, name:"twilliams", charity:"Red Cross", linkURL:"https://www.w3schools.com/html/html_links.asp"},
        {position: 4, dollarAmmount:55.00, name:"Janet Cross", charity:"Doctors Without Borders", linkURL:"https://www.w3schools.com/html/html_links.asp"},
        {position: 5, dollarAmmount:20.00, name:"Eli Perkins", charity:"Wounded Warrior", linkURL:"https://www.w3schools.com/html/html_links.asp"},
        {position: 6, dollarAmmount:17.50, name:"Edward Snowden", charity:"NSA", linkURL:"https://www.w3schools.com/html/html_links.asp"},
    ]);

    // an array of objects
    function insertRow(rowToInsert) {
        let rowInserted = false;
        if(rows.length === 0)
            rows.push(rowToInsert)
        else {
            for (let i = 0, len = rows.length; i < len; i++) {
                if (rowToInsert.dollarAmmount > rows[i].dollarAmmount && !rowInserted) {
                    rowInserted = true;
                    rowToInsert.position = (i+1);
                    rows.splice(i, 0, rowToInsert);
                    //add to the length so the position of the final element is incremented
                    len++;
                }
                else if(rowInserted){
                    //increment the position of rows after inserted row
                    rows[i].position = (rows[i].position+=1);
                }
            }
            if(rowInserted === false){
                rowToInsert.position = (rows.length+1);
                rows.push(rowToInsert);//add to the end
            }
        }
    }

    insertRow({position: 0, dollarAmmount:99.00, name:"Testy", charity:"test", linkURL:"https://www.w3schools.com/html/html_links.asp"});

    return (
        <table className="Leaderboard">
            <thead>
                <tr>
                    <th>
                        <svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.25 0.666656C42.7375 0.666656 39.6667 3.49999 39.6667 6.33332H17.3333C17.3333 3.49999 14.2625 0.666656 11.75 0.666656H0.583344V26.1667C0.583344 29 3.37501 31.8333 6.16668 31.8333H12.3083C13.425 37.5 17.0542 42.3167 25.7083 43.1667V49.06C17.3333 50.3633 17.3333 57.3333 17.3333 57.3333H39.6667C39.6667 57.3333 39.6667 50.3633 31.2917 49.06V43.1667C39.9458 42.3167 43.575 37.5 44.6917 31.8333H50.8333C53.625 31.8333 56.4167 29 56.4167 26.1667V0.666656H45.25ZM11.75 26.1667H6.16668V6.33332H11.75V26.1667ZM50.8333 26.1667H45.25V6.33332H50.8333V26.1667Z" fill="#E5E5E5"/>
                        </svg>
                    </th>
                    <th>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.4167 31.7917C27.7958 30.0708 25.6667 28.2917 25.6667 25.5208C25.6667 22.3417 28.6125 20.125 33.5417 20.125C38.7333 20.125 40.6583 22.6042 40.8333 26.25H47.2792C47.075 21.2333 44.0125 16.625 37.9167 15.1375V8.75H29.1667V15.05C23.5083 16.275 18.9583 19.95 18.9583 25.5792C18.9583 32.3167 24.5292 35.6708 32.6667 37.625C39.9583 39.375 41.4167 41.9417 41.4167 44.6542C41.4167 46.6667 39.9875 49.875 33.5417 49.875C27.5333 49.875 25.1709 47.1917 24.85 43.75H18.4333C18.7833 50.1375 23.5667 53.725 29.1667 54.9208V61.25H37.9167V54.9792C43.6042 53.9 48.125 50.6042 48.125 44.625C48.125 36.3417 41.0375 33.5125 34.4167 31.7917Z" fill="#E5E5E5"/>
                        </svg>
                    </th>
                    <th>
                        <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.5 0C13.216 0 0 13.216 0 29.5C0 45.784 13.216 59 29.5 59H44.25V53.1H29.5C16.697 53.1 5.9 42.303 5.9 29.5C5.9 16.697 16.697 5.9 29.5 5.9C42.303 5.9 53.1 16.697 53.1 29.5V33.7185C53.1 36.049 51.0055 38.35 48.675 38.35C46.3445 38.35 44.25 36.049 44.25 33.7185V29.5C44.25 21.358 37.642 14.75 29.5 14.75C21.358 14.75 14.75 21.358 14.75 29.5C14.75 37.642 21.358 44.25 29.5 44.25C33.571 44.25 37.288 42.598 39.943 39.9135C41.8605 42.539 45.1645 44.25 48.675 44.25C54.4865 44.25 59 39.53 59 33.7185V29.5C59 13.216 45.784 0 29.5 0ZM29.5 38.35C24.603 38.35 20.65 34.397 20.65 29.5C20.65 24.603 24.603 20.65 29.5 20.65C34.397 20.65 38.35 24.603 38.35 29.5C38.35 34.397 34.397 38.35 29.5 38.35Z" fill="#E5E5E5"/>
                        </svg>
                    </th>
                    <th>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55.0524 35L68.9442 21.1013C70.3054 19.7393 70.3054 17.5393 68.9442 16.1774L53.7958 1.02145C52.4346 -0.340484 50.2356 -0.340484 48.8743 1.02145L34.9825 14.9202L21.0908 1.02145C20.3927 0.357945 19.5201 0.00873045 18.6126 0.00873045C17.74 0.00873045 16.8325 0.357945 16.1693 1.02145L1.02094 16.1774C-0.340314 17.5393 -0.340314 19.7393 1.02094 21.1013L14.9127 35L1.02094 48.8987C-0.340314 50.2607 -0.340314 52.4607 1.02094 53.8226L16.1693 68.9786C17.5305 70.3405 19.7295 70.3405 21.0908 68.9786L34.9825 55.0798L48.8743 68.9786C49.5724 69.677 50.445 69.9913 51.3525 69.9913C52.26 69.9913 53.1326 69.6421 53.8307 68.9786L68.9791 53.8226C70.3403 52.4607 70.3403 50.2607 68.9791 48.8987L55.0524 35ZM35.0524 24.4537C36.9721 24.4537 38.5428 26.0252 38.5428 27.9459C38.5428 29.8665 36.9721 31.438 35.0524 31.438C33.1326 31.438 31.562 29.8665 31.562 27.9459C31.562 26.0252 33.1326 24.4537 35.0524 24.4537ZM18.6126 31.2983L5.94241 18.6568L18.6126 5.98029L31.2478 18.6219L18.6126 31.2983ZM28.0716 38.4223C26.1518 38.4223 24.5812 36.8508 24.5812 34.9302C24.5812 33.0095 26.1518 31.438 28.0716 31.438C29.9913 31.438 31.562 33.0095 31.562 34.9302C31.562 36.8508 29.9913 38.4223 28.0716 38.4223ZM35.0524 45.4066C33.1326 45.4066 31.562 43.8351 31.562 41.9144C31.562 39.9938 33.1326 38.4223 35.0524 38.4223C36.9721 38.4223 38.5428 39.9938 38.5428 41.9144C38.5428 43.8351 36.9721 45.4066 35.0524 45.4066ZM42.0332 31.438C43.9529 31.438 45.5236 33.0095 45.5236 34.9302C45.5236 36.8508 43.9529 38.4223 42.0332 38.4223C40.1134 38.4223 38.5428 36.8508 38.5428 34.9302C38.5428 33.0095 40.1134 31.438 42.0332 31.438ZM51.3176 64.0546L38.6475 51.4131L51.3176 38.7366L63.9529 51.3781L51.3176 64.0546Z" fill="#E5E5E5"/>
                        </svg>
                    </th>
                    <th>
                        <svg width="66" height="34" viewBox="0 0 66 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.6236 17.103C6.6236 11.4911 11.1853 6.92948 16.7971 6.92948H29.9242V0.694122H16.7971C7.73941 0.694122 0.388245 8.04528 0.388245 17.103C0.388245 26.1606 7.73941 33.5118 16.7971 33.5118H29.9242V27.2765H16.7971C11.1853 27.2765 6.6236 22.7148 6.6236 17.103ZM20.0789 20.3847H46.333V13.8212H20.0789V20.3847ZM49.6148 0.694122H36.4877V6.92948H49.6148C55.2266 6.92948 59.7882 11.4911 59.7882 17.103C59.7882 22.7148 55.2266 27.2765 49.6148 27.2765H36.4877V33.5118H49.6148C58.6724 33.5118 66.0236 26.1606 66.0236 17.103C66.0236 8.04528 58.6724 0.694122 49.6148 0.694122Z" fill="#E5E5E5"/>
                        </svg>
                    </th>
                </tr>
            </thead>
            {rows.map(item => (
                <LeaderboardRow key={item.position} row={item} />
            ))}
        </table>
    )
}
