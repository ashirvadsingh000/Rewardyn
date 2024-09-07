import React from 'react'
import { BsDot } from 'react-icons/bs'
const Page4 = () => {
  return (
    <div>
       <div className="font-roboto bg-gray-100 lg:pt-28 pt-16">
          <div className="bg-blue-600 text-white text-center py-8">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABXCAMAAAC3HXLTAAAA7VBMVEX/////agAAAAD/YgD/ZwD/XQD/+vj/WgD/bQD/bwD/VgD/39L//fz/8er/0MH/5tv/6uL/hUn/9/L/1sf29va4uLj/onz/byX/r47/bRv/tpo+Pj5pamv/uZ//xK7/spP/fz//TAD/qIT/iFnjXwTp6en/l2rKysryZgN3d3fY2NiFhYWWlpb/zbn/v6X/ekH/kGD/eC26TgBdGgCpQgA1FQAACBGONgDKUwBsLAAAFx0gKi4tAAB0LABTHgBNVFYjCQAlNjpAFgAuMTLCemMaAADol3WeQwVgKQGmpqYcHBxHHgCDNwSYenHrhF5gOU00AAAGxElEQVRYhe2Za3uiRhTHgZkBwwByiQKagIKia6KAm80mu82m3XTbTbrt9/84nQsiaFCS7Zs+T84buZz5MfOfM2cuCkJrs7ERRImVd0RRzK3ECxy9feEG00wnslwIAIBQZAbpjWutzJ+hYi8WFVAQxc58LnaKa4hg/7VoJ/LVEkrsZC1J768mJ50CDpD3CioOSYsrVFGcfLi+WFyeXUsfb+YFGmXay6i2YUEg7tj89tOUvJvOzj7/cjfhmqDkJVg5zBW4Q+1Q+3I9Yw7T2b30/oaTV62xZqTWJaDQ+c3Vjw8SscfCa3oh/eDklmLoEQB16HyyvvuVID/fv3tcnJ6WnovfPlIyaFVleeCiKlScXN1+laRPD2e9xXS3aqfDCQW3UdmoYEn7bz4SqPRw2Vs87764IlWGo6NamJlajoSTyfqWQIcXs0Mlfqe+/jHwygebuk7WX74RTR+np4eL/EEr0jkMthNl01msrmez6ZGKEMsIGOYHwQ4bD52T+fqOUA8LUJrp05xxsPNCxNRdfyd9ddHQVfs2QEfCTe4XwfChnQKF2T4bIM2Z2Y4LbudPqZ0G3PpUPZA1vtf9cqjNpfv2XEdlqbPb9L7rbhPDye11TeDpAbl1Vq553Jl5JeF0vku9GvjiXWMkJ6ydsGkSsd0693Ln/fC+gRyyflGaQqLGFb+XSbEw7ULafVQYFxiOGrhytuk3Otfs1Xc2lB6HD88VNFkh6DcJsYlfsfP1ak+HxZn0NBPun54pZ1usQiho4K7KJHlyTdNDlfo4bFKBGG8oipreb6eKE+mJkJ+GF4+9Wa93eU/uho+NARHxgGhOxGIFfDa9HD5IhZEvLJozZsDyIITNY7kGJvenix6zw/nC4QICo9llF9zKMBewMYJfC9b50rC5414JlnkGANZBr3Iod9YtwVrMA8K3W4A74vqbNOwd9NwYzzxi44irgjuTv6SH3pHpuLCQc5FzxI+peyVJl+2wgqFy7uCYI63vnfTQdpbDRQAfXlPhSCXgzg/prGV1BTvlARHLzT7dlav654JIo6Etd9NxsGmS0/QghgRLRro4//rQeqnv8JWS0pAq9fMYKQo4Z3HYuWk/3ct8rnl2ztAdj+yCgJJuPtq5+dSWu8ndYKfCsolDy6V7QBAvS/HFyee2XC3mkyOshLCMV/1iFwhAVo1tUbw90nVlyu1udqWW0+3i5eqcIFWV79cgAmF9KJJnfzcybRxEQdm4outICVAYLO+zZRkB3fMBLUM1+wfvhaVm604Y52lQyTQluG4A5JG5DSwjcrDRl9mQhkrqLTcN0Uy8DPtxrqhjqz5BdPe2k1QCJXFq1UpMzxjggbBpDFJVBdGfMfklrVRdby99xXUyBIrY352ccGD2l6EWCfuVoF9Jd6rBTc/R9lQB+bG3LyEZ0OZqGQiRUN+E027xcw83TL52mPsQQt9344FjPj9gk64jrIxAWCaQigAQUkjojPor5/DEoHcxNg+54ATbQZ991KYxuVrihiq81OTAw/8J6M3e7M3+B2ZTO7Deea3J+SgdpS85D9WXAy8Mjp7NyojkXdBvjQ3yMTVV9Y9kNpkdcLQF2zFCcYC7Rp9MV01b1VeA5QzBJb/EELoHT9hfBA6Rutxce+NxfX51wiz3/VFy7tTA+ioZZYNy1YoH1CvPBtXFlO7vrcP1pcD3gHJM13QQ0Mk0NktwZPiIPoN8YyD3Cy/yKN0ukZcILHfAeCxwrdnZArDYSQFI7QIs5pt1lMq+79GlEBhxL7+UMgJgV1asCCJ10EmcqGNMtRf5EQQHg9QxA5deIdIMHVCvgF7QJ+GGYkFQCOAw0zkYnZNHtixrmiDb2gjyPitqTGuCVaYKXc8RL/qjJfQ8s9yYjiAsNBkjspBQDQ7mDrLjZXGapr5YARdHln6JkTHxsrjXFlzWGGdJYkFUgEVfoKfRKu0kxM77SzDgQ5rVjwrvjCpeW3C/qvESVcEBa208CByrKkURx1YBNigQjIhXVpMiQJXNwxZMtips9wYzrldVipiujWT6VZjydzCnXnWw7sNU2weTzavpbgQ1alKIgMSvnRXPZOY1Eort6RYseGj7v1AJhiTcdBZRII4yZQes5JnIr0i4sRNdYEUJqmssaBZAib4DZrv4SC3WsC7TOClHXsL/vYE0hIQB7zQyZugGFVbPQRIFqKNo4GUiYr5YFVj61EKXrGOBm9mR77o+BZNFsA9CzaMvyDaJFT9PmVfcDSDxiitgwclcOnwUmMchHSCg7ADHMBw6ukxitFVdajp/UeZuu/CyqdfOZKFjg7wsluzyz/yB+GYt7V9Cb4ertoeoUAAAAABJRU5ErkJggg==" alt=" logo" className="mx-auto mb-4" />
            <h1 className="text-xl font-bold">Coupon Codes</h1>
            <p className="text-sm">
              Discover the trendiest, freshest, and most unique styles at , your ultimate fashion destination offering on-trend collections at...
              <span className="text-blue-300"> see more</span>
            </p>
            <div className="flex justify-center items-center mt-4">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="ml-2 text-sm">4.6 of 5 | 1373 Reviews</span>
            </div>
          </div>
          <div className="text-center py-8">
            <p className="text-sm text-gray-600 mb-2">92% positive rating by 5K+ users</p>
            <p className="text-sm text-gray-600 mb-4">₹31 Lakh+ Cashback given in last month</p>
            <h2 className="text-2xl font-bold mb-2">Giant Fashion Sale: 40-80% Off Across Categories</h2>
            <p className="text-lg mb-4">+ Upto 8% CashKaro Cashback on all  Orders</p>
            <div className="bg-gray-100 p-4 rounded-lg inline-block">
              <p className="text-red-500 font-bold mb-2">Bonus Offer: Just for you</p>
              <p className="text-sm mb-2">+ Flat 2% Bonus Cashback on Buying Any Product worth ₹1500 or more</p>
              <div className="text-red-500 font-bold text-lg mb-4">
                <span>11</span>:<span>13</span>:<span>48</span>:<span>04</span>
                <span className="text-sm font-normal"> days hrs mins secs</span>
              </div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full"><a href="https://www.target.com/">EARN UPTO 8% CASHBACK</a></button>
            </div>
          </div>
          <div className="bg-white py-8">
            <div className="flex justify-center items-center mb-4">
              <div className="text-center mx-4">
                <p className="text-sm text-gray-600 flex">Cashback Rates</p>
              </div>
              <div className="text-center mx-4">
                <p className="text-sm text-gray-600">Offer Terms</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-1/3 text-center">
                <p className="text-sm text-gray-600"> Purchase</p>
              </div>
              <div className="w-1/3 text-center">
                <p className="text-sm text-gray-600">Cashback Track in 30 Minutes</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <div className="w-1/3 text-center">
                <i className="fas fa-circle text-orange-500"></i>
              </div>
              <div className="w-1/3 text-center">
                <i className="fas fa-circle text-orange-500"></i>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full"><a href="https://www.target.com/">See More Offers</a></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page4
