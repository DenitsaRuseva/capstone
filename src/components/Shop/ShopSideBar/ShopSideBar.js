import React from 'react';
import CategoryButtons from './CategoryButtons/CategoryButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../Logo/Logo';
import WithouthRootDiv from '../../../hoc/WithoutRootDiv/WithoutRootDiv';
import './ShopSideBarNew.css';

const shopSideBar = (props) => {
    console.log('in shop side bar');

   
    const attachedClasses = props.shownCategoryMenu ? ['side-bar-wrapper show-categories'] : ['side-bar-wrapper'];
    return (
        <div className='side-bar-main'>
            
        <div className={attachedClasses}>
            <div className='l-only'> 
                <div className='md-only'><span>Categories:</span></div>
            </div>
            <div className='hide-on-l'>
                <div className='md-only' onClick={() => props.toggleCategoryMenu()}><span>Shop by category <FontAwesomeIcon icon="chevron-down"/></span></div>
            </div>
            {/* <div className='decoration up'>
                <svg viewBox="0 0 144.51883 39.125126" xmlns="http://www.w3.org/2000/svg" fill='brown'>
                <g transform="translate(-724.88 -598.51)">
                <path d="m841.25884,598.51403c-.0615-.00248-.187.03305-.25.03125-4.4119-.1258-12.414,1.19225-20.3437,3.375-8.3322,2.29354-16.3542,6.05099-25.4063,8.9375-4.0878-1.92533-8.2447-3.76165-12.4062-5.25-7.2467-2.5917-14.2508-4.28125-19.75-4.28125-1.3667,0-2.7011.08596-4,.25s-2.5774.40771-3.7813.71875c-2.4078.62209-4.6061,1.51712-6.4687,2.625-3.3231,1.97646-5.5339,4.66403-6,7.6875-1.8957.06323-3.7037.1633-5.2188.34375-3.5927.42788-6.1908,1.14903-8.0625,2.09375-.9358.47236-1.6966.99845-2.3125,1.5625-2.4637,2.25619-2.375,5.09484-2.375,6.84375 0,1.17621.5848,2.48927 1.6563,3.9375s2.6672,2.99151 4.8437,4.40625c1.0883.70737 2.3059,1.38397 3.6875,2 2.7633,1.23206 6.1253,2.22532 10.125,2.75 1.9999.26234 4.1753.40625 6.5.40625 2.1877,0 4.6181-.23206 7.1563-.5625 8.3229-1.08355 18.1035-3.68446 27.0312-6.46875 1.5017-.46833 2.5932-.87335 4.0313-1.34375 1.2248.55655 2.4737,1.06985 3.6875,1.625 5.7943,2.65027 11.4315,5.23193 16.6875,7.4375l.625-1.46875c-5.2191-2.19011-10.8593-4.78607-16.6563-7.4375-.6892-.31524-1.4001-.62116-2.0937-.9375 8.625-2.88601 16.0662-5.5981 18.3437-6.40625 .2353-.08348 1.2057-.42447 1.5-.53125 4.7531,2.1442 9.7417,4.22891 14.7188,5.96875 4.098,1.43254 8.041,2.64029 11.5312,3.53125s6.5264,1.46446 8.7813,1.5625c4.4936.19538 10.1122-1.16356 14.625-3.625 1.1281-.61536 2.1707-1.3057 3.125-2.0625s1.7952-1.57187 2.5-2.46875c1.4093-1.79377 2.2492-3.90711 2.0937-6.1875-.2974-4.36255-2.6298-7.33764-5.9687-9.09375-2.1783-1.14561-4.8514-1.70565-7.6563-2.0625-.6365-2.78405-2.0858-4.74473-4.2187-5.90625-1.5048-.81945-3.3426-1.26739-5.375-1.5625-1.5934-.30889-3.1613-.42001-4.5938-.40625-.0979.00094-.2161-.03334-.3125-.03125zm0,1.59375h.0313c1.7583.07703 3.284.2534 4.7187.46875 1.3.26378 2.6016.61692 3.75,1.1875 1.9555.97156 3.4908,2.37856 4.25,4.5-.9474-.07673-1.8357-.2609-2.8125-.28125-14.76,1.50859-28.7791,6.09808-43.0937,11.21875-1.314-.6531-2.8543-1.2893-4.0313-1.9375-.9798-.53957-2.1038-1.02975-3.125-1.5625 .2451-.10242.7868-.28206 1-.375 3.6374-1.58552 11.3406-4.85979 19.2188-7.75 7.862-2.88429 15.9753-5.37165 20.0937-5.46875zm-78.1562,2.8125c1.2906,0 2.6769.08493 4.1562.28125s3.031.5069 4.6563.875c6.6119,1.49752 14.2323,4.31367 21.4687,7.625-4.351,2.02377-8.228,3.92437-13.75,6.1875-1.9557.80151-3.6747,1.34558-5.5625,2.0625-2.0856-.83072-4.1688-1.67429-6.2187-2.40625-5.7735-2.06144-11.3673-3.66897-16.5625-4.46875-2.3699-.36481-4.6292-.50465-6.8125-.5 .3364-1.63434 1.2738-3.24059 2.9062-4.65625 .6699-.58095 1.4552-1.11509 2.3125-1.625 1.7146-1.01982 3.757-1.88086 6.0313-2.46875s4.7773-.90625 7.375-.90625zm86.0937,6.90625c.2946-.01319.5822-.00545.8438,0 1.507.0314 2.9528.11729 4.4062.1875-.0262.37619.0027.75116-.0625,1.125-.3207,1.7232-1.0049,3.40616-2,4.9375-.4975.76567-1.0893,1.48227-1.7187,2.15625-1.2589,1.34796-2.7292,2.48248-4.3125,3.28125-.7918.39939-1.6148.71411-2.4375.9375s-1.6486.35342-2.4688.375c-1.7052.04487-3.1768-.16041-4.4062-.5-1.1831-.32676-2.1479-.78877-2.9063-1.3125 1.4414-.26547 2.5624-1.51348 2.5625-3.03125 0-1.71041-1.4146-3.09376-3.125-3.09375-.157,0-.2868.00869-.4375.03125-.2817-.02489-.5895-.01045-.9062.03125-.8906.26386-1.7329,1.1824-1.8438,2.625-.0621.80655.158,1.63385.625,2.4375s1.1891,1.58335 2.125,2.25 2.105,1.23977 3.5,1.625 2.995.5799 4.8438.53125c.9568-.02518 1.9091-.15543 2.8437-.40625s1.8671-.61724 2.75-1.0625 1.7293-.98523 2.5313-1.59375 1.5583-1.29066 2.25-2.03125 1.3224-1.52663 1.875-2.375 1.028-1.75919 1.4062-2.6875 .6436-1.89459.8125-2.875c.0747-.43333.0336-.87291.0625-1.3125 2.2961.1632 4.474.43217 6.25,1 1.6286.5207 2.9369,1.27103 3.875,2.3125s1.5258,2.39919 1.6563,4.3125c.0625.91737-.0766,1.77943-.375,2.625s-.7617,1.65678-1.375,2.4375-1.3784,1.52737-2.25,2.21875-1.8483,1.32917-2.9063,1.90625c-2.116,1.15417-4.5367,2.06989-6.9375,2.65625s-4.7885.83936-6.8437.75c-2.0473-.08901-4.9698-.62567-8.4063-1.5s-7.3754-2.08002-11.4375-3.5c-4.3986-1.53763-8.8851-3.31443-13.1562-5.1875 3.7156-1.36427 8.5603-3.19735 15.0937-5.34375 7.5845-2.49173 15.5806-4.73958 20-4.9375zm-104.8437,4.34375c6.6775-.03683 14.5606,1.92495 22.9375,4.90625 1.4869.5292 3.0205,1.16432 4.5312,1.75-1.4163.51556-3.0257,1.1758-4.3125,1.59375-1.4778.47998-2.7689.84632-4,1.15625-1.4913.26383-3.4798.75-4.3437.75-3.5544,0-7.3663-1.26658-10.2188-3.25-2.6871-1.86841-4.3939-4.34462-4.5937-6.90625zm-1.625.03125c.0998,1.53163.576,2.99201 1.4375,4.3125 .9567,1.46661 2.3083,2.78578 3.875,3.875s3.3841,1.98269 5.2812,2.59375 3.8798.9375 5.8438.9375c2.0371,0 5.1829-.59878 8.9687-1.53125 2.2513-.55451 4.9127-1.38084 7.4688-2.125 .1365.0559.2696.10003.4062.15625 2.9586,1.21755 5.904,2.61631 8.875,3.9375-2.0393.90217-2.8227,1.30674-5.0937,2.21875-8.8664,3.5605-19.1188,6.78125-28.0938,6.78125-2.258,0-4.3531-.15347-6.2812-.40625s-3.7014-.61539-5.3125-1.0625c-3.2225-.89422-5.8117-2.11663-7.8438-3.4375-1.0161-.66043-1.8879-1.32115-2.625-2s-1.3428-1.36508-1.8125-2c-.9394-1.26985-1.3439-2.39924-1.3437-3 0-.90253-.0323-1.8827.1875-2.84375s.698-1.90642 1.6875-2.8125c.4946-.45304 1.14-.90002 1.9687-1.3125 1.6574-.82495 4.0447-1.51927 7.5-1.9375 1.4056-.17014 3.1313-.27887 4.9063-.34375zm56.1875.28125c1.4501.73671 3.0071,1.43427 4.375,2.1875 .7615.41942 1.7761.82896 2.5937,1.25-6.3498,2.57734-12.2442,5.01301-19,7.5625-2.955-1.32344-5.8833-2.66798-8.8437-3.90625 .9236-.27871 1.7273-.46017 2.6562-.75 7.2607-2.26534 13.8279-4.61876 18.2188-6.34375z"/>
                </g>
                </svg>
            </div> */}
            <div className='side-bar-container'>
                <div className='side-bar'> 
                    <CategoryButtons
                    clickOnCategory={props.clickOnCategory}
                    clickOnSubcategory={props.clickOnSubcategory}
                    currentCategory={props.currentCategory}
                    clickedCategories={props.clickedCategories}/>
                </div>
                <div className='decoration down'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2658 281.386" enableBackground="new 0 0 2658 281.386"> <g> <g> <path d="M1412.709,200.808c61.507,14.105,126.765,20.981,167.007-27.373c1.074,1.273,28.542,30.853,32.277,34.485 c30.587-40.423,92.939-47.71,143.84-47.71c0.148,1.028,3.067,14.552,3.195,15.145c46.867-15.712,105.042-19.062,153.494-19.062 c4.501,4.725,9.985,9.83,12.87,13.226c0,0,462.983-21.01,683.608-30.568c-0.001,0-683.607-30.645-683.608-30.645 c-3.547,4.174-7.395,7.516-12.87,13.225c-48.456,0-105.675-3.156-153.494-19.05c-0.52,2.388-2.917,13.216-3.195,15.145 c-49.191,0-112.445-6.219-143.84-47.71c-2.568,2.481-30.34,32.257-32.277,34.484c-39.584-47.564-109.623-42.892-168.927-26.74 c-43.92-56.438-121.664-61.489-171.911-1.919c-58.067-14.016-122.569-17.309-160.251,28.659 c-0.881-1.014-31.821-34.096-32.209-34.484c-37.583,41.699-87.801,47.71-143.829,47.71c-0.827-2.464-3.055-14.141-3.274-15.145 c-52.561,15.991-100.682,19.05-153.781,19.05c-6.333-6.333-8.208-8.077-12.583-13.225c0,0-683.949,30.645-683.951,30.645 c154.752,6.594,683.951,30.568,683.951,30.568c3.351-3.945,5.419-6.013,12.583-13.226c54.018,0,102.11,3.206,153.781,19.062 c0.216-1,2.297-12.234,3.274-15.145c56.516,0,106.272,6.04,143.829,47.71c0.771-0.776,31.229-33.323,32.209-34.485 c36.746,44.7,101.305,43.204,157.976,29.359C1283.847,263.764,1367.387,262.865,1412.709,200.808"/> </g> </g> </svg>
                {/* <svg viewBox="0 0 144.51883 39.125126" xmlns="http://www.w3.org/2000/svg" fill='saddlebrown'>
                <g transform="translate(-724.88 -598.51)">
                <path d="m841.25884,598.51403c-.0615-.00248-.187.03305-.25.03125-4.4119-.1258-12.414,1.19225-20.3437,3.375-8.3322,2.29354-16.3542,6.05099-25.4063,8.9375-4.0878-1.92533-8.2447-3.76165-12.4062-5.25-7.2467-2.5917-14.2508-4.28125-19.75-4.28125-1.3667,0-2.7011.08596-4,.25s-2.5774.40771-3.7813.71875c-2.4078.62209-4.6061,1.51712-6.4687,2.625-3.3231,1.97646-5.5339,4.66403-6,7.6875-1.8957.06323-3.7037.1633-5.2188.34375-3.5927.42788-6.1908,1.14903-8.0625,2.09375-.9358.47236-1.6966.99845-2.3125,1.5625-2.4637,2.25619-2.375,5.09484-2.375,6.84375 0,1.17621.5848,2.48927 1.6563,3.9375s2.6672,2.99151 4.8437,4.40625c1.0883.70737 2.3059,1.38397 3.6875,2 2.7633,1.23206 6.1253,2.22532 10.125,2.75 1.9999.26234 4.1753.40625 6.5.40625 2.1877,0 4.6181-.23206 7.1563-.5625 8.3229-1.08355 18.1035-3.68446 27.0312-6.46875 1.5017-.46833 2.5932-.87335 4.0313-1.34375 1.2248.55655 2.4737,1.06985 3.6875,1.625 5.7943,2.65027 11.4315,5.23193 16.6875,7.4375l.625-1.46875c-5.2191-2.19011-10.8593-4.78607-16.6563-7.4375-.6892-.31524-1.4001-.62116-2.0937-.9375 8.625-2.88601 16.0662-5.5981 18.3437-6.40625 .2353-.08348 1.2057-.42447 1.5-.53125 4.7531,2.1442 9.7417,4.22891 14.7188,5.96875 4.098,1.43254 8.041,2.64029 11.5312,3.53125s6.5264,1.46446 8.7813,1.5625c4.4936.19538 10.1122-1.16356 14.625-3.625 1.1281-.61536 2.1707-1.3057 3.125-2.0625s1.7952-1.57187 2.5-2.46875c1.4093-1.79377 2.2492-3.90711 2.0937-6.1875-.2974-4.36255-2.6298-7.33764-5.9687-9.09375-2.1783-1.14561-4.8514-1.70565-7.6563-2.0625-.6365-2.78405-2.0858-4.74473-4.2187-5.90625-1.5048-.81945-3.3426-1.26739-5.375-1.5625-1.5934-.30889-3.1613-.42001-4.5938-.40625-.0979.00094-.2161-.03334-.3125-.03125zm0,1.59375h.0313c1.7583.07703 3.284.2534 4.7187.46875 1.3.26378 2.6016.61692 3.75,1.1875 1.9555.97156 3.4908,2.37856 4.25,4.5-.9474-.07673-1.8357-.2609-2.8125-.28125-14.76,1.50859-28.7791,6.09808-43.0937,11.21875-1.314-.6531-2.8543-1.2893-4.0313-1.9375-.9798-.53957-2.1038-1.02975-3.125-1.5625 .2451-.10242.7868-.28206 1-.375 3.6374-1.58552 11.3406-4.85979 19.2188-7.75 7.862-2.88429 15.9753-5.37165 20.0937-5.46875zm-78.1562,2.8125c1.2906,0 2.6769.08493 4.1562.28125s3.031.5069 4.6563.875c6.6119,1.49752 14.2323,4.31367 21.4687,7.625-4.351,2.02377-8.228,3.92437-13.75,6.1875-1.9557.80151-3.6747,1.34558-5.5625,2.0625-2.0856-.83072-4.1688-1.67429-6.2187-2.40625-5.7735-2.06144-11.3673-3.66897-16.5625-4.46875-2.3699-.36481-4.6292-.50465-6.8125-.5 .3364-1.63434 1.2738-3.24059 2.9062-4.65625 .6699-.58095 1.4552-1.11509 2.3125-1.625 1.7146-1.01982 3.757-1.88086 6.0313-2.46875s4.7773-.90625 7.375-.90625zm86.0937,6.90625c.2946-.01319.5822-.00545.8438,0 1.507.0314 2.9528.11729 4.4062.1875-.0262.37619.0027.75116-.0625,1.125-.3207,1.7232-1.0049,3.40616-2,4.9375-.4975.76567-1.0893,1.48227-1.7187,2.15625-1.2589,1.34796-2.7292,2.48248-4.3125,3.28125-.7918.39939-1.6148.71411-2.4375.9375s-1.6486.35342-2.4688.375c-1.7052.04487-3.1768-.16041-4.4062-.5-1.1831-.32676-2.1479-.78877-2.9063-1.3125 1.4414-.26547 2.5624-1.51348 2.5625-3.03125 0-1.71041-1.4146-3.09376-3.125-3.09375-.157,0-.2868.00869-.4375.03125-.2817-.02489-.5895-.01045-.9062.03125-.8906.26386-1.7329,1.1824-1.8438,2.625-.0621.80655.158,1.63385.625,2.4375s1.1891,1.58335 2.125,2.25 2.105,1.23977 3.5,1.625 2.995.5799 4.8438.53125c.9568-.02518 1.9091-.15543 2.8437-.40625s1.8671-.61724 2.75-1.0625 1.7293-.98523 2.5313-1.59375 1.5583-1.29066 2.25-2.03125 1.3224-1.52663 1.875-2.375 1.028-1.75919 1.4062-2.6875 .6436-1.89459.8125-2.875c.0747-.43333.0336-.87291.0625-1.3125 2.2961.1632 4.474.43217 6.25,1 1.6286.5207 2.9369,1.27103 3.875,2.3125s1.5258,2.39919 1.6563,4.3125c.0625.91737-.0766,1.77943-.375,2.625s-.7617,1.65678-1.375,2.4375-1.3784,1.52737-2.25,2.21875-1.8483,1.32917-2.9063,1.90625c-2.116,1.15417-4.5367,2.06989-6.9375,2.65625s-4.7885.83936-6.8437.75c-2.0473-.08901-4.9698-.62567-8.4063-1.5s-7.3754-2.08002-11.4375-3.5c-4.3986-1.53763-8.8851-3.31443-13.1562-5.1875 3.7156-1.36427 8.5603-3.19735 15.0937-5.34375 7.5845-2.49173 15.5806-4.73958 20-4.9375zm-104.8437,4.34375c6.6775-.03683 14.5606,1.92495 22.9375,4.90625 1.4869.5292 3.0205,1.16432 4.5312,1.75-1.4163.51556-3.0257,1.1758-4.3125,1.59375-1.4778.47998-2.7689.84632-4,1.15625-1.4913.26383-3.4798.75-4.3437.75-3.5544,0-7.3663-1.26658-10.2188-3.25-2.6871-1.86841-4.3939-4.34462-4.5937-6.90625zm-1.625.03125c.0998,1.53163.576,2.99201 1.4375,4.3125 .9567,1.46661 2.3083,2.78578 3.875,3.875s3.3841,1.98269 5.2812,2.59375 3.8798.9375 5.8438.9375c2.0371,0 5.1829-.59878 8.9687-1.53125 2.2513-.55451 4.9127-1.38084 7.4688-2.125 .1365.0559.2696.10003.4062.15625 2.9586,1.21755 5.904,2.61631 8.875,3.9375-2.0393.90217-2.8227,1.30674-5.0937,2.21875-8.8664,3.5605-19.1188,6.78125-28.0938,6.78125-2.258,0-4.3531-.15347-6.2812-.40625s-3.7014-.61539-5.3125-1.0625c-3.2225-.89422-5.8117-2.11663-7.8438-3.4375-1.0161-.66043-1.8879-1.32115-2.625-2s-1.3428-1.36508-1.8125-2c-.9394-1.26985-1.3439-2.39924-1.3437-3 0-.90253-.0323-1.8827.1875-2.84375s.698-1.90642 1.6875-2.8125c.4946-.45304 1.14-.90002 1.9687-1.3125 1.6574-.82495 4.0447-1.51927 7.5-1.9375 1.4056-.17014 3.1313-.27887 4.9063-.34375zm56.1875.28125c1.4501.73671 3.0071,1.43427 4.375,2.1875 .7615.41942 1.7761.82896 2.5937,1.25-6.3498,2.57734-12.2442,5.01301-19,7.5625-2.955-1.32344-5.8833-2.66798-8.8437-3.90625 .9236-.27871 1.7273-.46017 2.6562-.75 7.2607-2.26534 13.8279-4.61876 18.2188-6.34375z"/>
                </g>
                </svg> */}
        </div>
            </div>
            
        </div>
        
        {/* <Logo class='small'/> */}
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         categoriesAndSubcat: state.categoriesAndSubcat
//     };
// };

export default shopSideBar;