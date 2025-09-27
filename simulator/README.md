# Simulator
This is the main simulator process. It is intended that this will eventually be comprised of a management layer and multiple simulators.

We decided to use Clang since we haven't prior partly and since it should be more compatible between Windows and Linux.

## Manual Build Steps
```
1. cd simulator
2. mkdir build && cd build
3. cmake -D CMAKE_CXX_COMPILER=clang++ ..
4. make
```

## Dependencies
```
sudo apt update
sudo apt install clang clang-format
```
