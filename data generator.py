import datetime as dt
import pandas as pd
import os

def symbol_to_path(symbol, base_dir=os.path.join("..", "data")):
    """Return CSV file path given ticker symbol."""
    return os.path.join(base_dir, "{}.csv".format(str(symbol)))

def get_data(symbols, dates, addSPY=True, colname = 'Adj Close'):
    """Read stock data (adjusted close) for given symbols from CSV files."""
    df = pd.DataFrame(index=dates)
    if addSPY and 'SPY' not in symbols:  # add SPY for reference, if absent
        symbols = ['SPY'] + symbols

    for symbol in symbols:
        df_temp = pd.read_csv(symbol_to_path(symbol, base_dir="."), index_col='Date',
                parse_dates=True, usecols=['Date', colname], na_values=['nan'])
        df_temp = df_temp.rename(columns={colname: symbol})
        df = df.join(df_temp)
        if symbol == 'SPY':  # drop dates SPY did not trade
            df = df.dropna(subset=["SPY"])

    return df

sd = dt.date(2010,1,2)
ed = dt.date(2010,12,31)
syms = ['IBM', 'AAPL', 'JPM']

dates = pd.date_range(sd, ed)
prices = get_data(syms, dates)  # automatically adds SPY

# Get daily portfolio value
normed = prices / prices.iloc[0]
normed['date'] = normed.index.strftime('%d-%b-%y')
print normed.head()

normed.to_json('my_data.json',orient='records')
# print normed.to_json(orient='records')