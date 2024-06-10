import React, { useEffect, useState }  from 'react';
import {Icon} from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import {check} from 'react-icons-kit/feather/check'
import './style.css';

export const Table = ({sectionData, onChangeInput}) => {

        const setUpperTotal = sectionData?.items?.reduce((acc ,current)=>  {
            return acc + current?.quantity*current?.unit_cost;
        },0);
       
    return (
        <div className="table-container">
            <div className='section-name'>
                <p className='name'> - {sectionData?.section_name}</p>
                <p className='price'> ${setUpperTotal} <Icon class="absolute mr-10" icon={eye} size={18}/></p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Testype</th>
                        <th>Item Name</th>
                        <th>QTY</th>
                        <th>Unit Cost</th>
                        <th>Unit</th>
                        <th>Total</th>
                        <th>Tax</th>
                        <th>Cost Code</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sectionData?.items?.map(item => {
                            let total = item?.quantity && item?.quantity*item?.unit_cost;
                            return (
                                <tr key={item?.item_id}>
                                <td>{item?.item_type}</td>
                                <td>{item?.subject}</td>
                                <td>
                                     <input
                                      name="quantity"
                                      value={item?.quantity}
                                      type="number"
                                      onChange={(e) => {onChangeInput(e,item?.item_id, sectionData?.section_id)}}
                                      placeholder="quantity"
                                     />
                                    </td>
                                <td>
                                    <input
                                      name="unit_cost"
                                      value={item?.unit_cost}
                                      type="number"
                                      onChange={(e) => {onChangeInput(e,item?.item_id,sectionData?.section_id)}}
                                      placeholder="cost"
                                     />
                                   
                                </td>
                                <td>{item?.unit}</td>
                                <td>{total || 0}</td>
                                <td>{item?.tax_rate && <Icon class="absolute mr-10" icon={check} size={18}/>}</td>
                                <td>{item?.cost_code}</td>
                                <td><Icon class="absolute mr-10" icon={eye} size={18}/></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
