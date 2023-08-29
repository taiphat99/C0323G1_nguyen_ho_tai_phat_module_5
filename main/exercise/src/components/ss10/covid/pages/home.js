import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function home ({result}) {
    console.log(result);
    return (
        <div>   
            <h1>VietNam's COVID-19 Infomation</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    </tr>
                </thead>
                {
                    result.map(item => 
                    (
                        <tbody key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.confirmed}</td>
                            <td>{item.active}</td>
                            <td>{item.recovered}</td>
                            <td>{item.deaths}</td>
                            </tr>
                        </tbody>
                    )
                    )
                }
            </table>
        </div>
    );
};
export async function getStaticProps() {
    // fetch dữ liệu từ file system, API, DB,...
        const result = (await axios.get("http://localhost:8000/covid")).data;
    // Giá trị của `props` sẽ được truyền tới component `Home`
    console.log(result);
    return {
      props:{ result}
    }
  }
  