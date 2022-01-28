# The-Blue-Sky-Challenge

<p align="center">
    BREATHE BLUE
</p>

<p align="center">
    IEEE Blue Sky Challenge
</p>


Our goal is to predict the immediate day’s Temperature and concentration of Carbon monoxide, with the help of its previous week. Once it’s predicted and the day passes off, the real-time values from sensors are recorded and appended to the Training dataset and this continues every day.
As explained in the video, the previous attempts before finalizing on XGBoost Regressor had various impacts. Some gave a low MAPE for one parameter but not for the other whereas some failed in both. We start with importing the Data and cleaning it. We found a few outliers as well as negative values for concentration, which was impractical and had to drop them. Then we split the data into Training and testing data frames and further breaking them into the Independent/Target value (T or CO) and dependent values.
The model is imported and Tuned against a dictionary containing random yet good parameters and after some permutations and combinations, the estimator with the best parameters is shown. This was fed into a loop to predict the 18th day’s readings with the help of fitting the values from 11th to 17th. The predicted values are kept in an array and then we repeat it for the 19th day, by appending 18th’s original readings for the training. This cycle goes on till 24th.
The values undergo a few mathematical steps, with the formula:


<p align="center" width="100%">
    <img width="33%" src="https://user-images.githubusercontent.com/65529555/151517633-3a1b95e2-b977-48d5-9d18-62545cc7c966.png">
</p>

 
•	At = Actual value

•	Ft = Forecast value

•	n = Number of fitted points

Here the outer mean is taken for each day, since we are passing and predicting values for the same. The MAPE values are displayed (daily and average) and we find out the Temperature doesn’t give a satisfactory result. So we decompose the data into Seasonal, Residual and Trend. Also, we test out whether, the decomposition mode was Additive or Multiplicative. 
While adding all these 3 components and plotting on the same graph of Temperature, it perfectly overlaps. So now, we have got three extra columns to train. We apply the same for loop logic for each day and store the results. We take the sum of these values and compare it with the real T values. We do the same MAPE calculation and we could finally bring it down from 19.4% to 17.20%

We tried applying the same for CO(GT) and it reaped only a negligible difference. With all of these values side by, we can conclude that this time series had: A small dataset. A massive shift in readings, which too occurred in the Testing, was a primary reason for XGB’s poor prediction on the trend. Hope you loved our perspective of solving this problem. Thank You.

Check out or website to see our complete results

https://still-scrubland-79745.herokuapp.com/

BREATH BLUE

Rohit Ram A

Ramnath K

Sam DJ
