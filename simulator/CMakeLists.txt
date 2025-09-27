# CMake minimum version
cmake_minimum_required(VERSION 3.10)

# Project name and language
project(Simulator LANGUAGES CXX)

# Set C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Add executable
add_executable(simulator main.cpp)

# To build, create a build directory and run cmake from there:
# mkdir build
# cd build
#
# To specify Clang as the compiler, you can set environment variables before running cmake:
# export CC=/usr/bin/clang
# export CXX=/usr/bin/clang++
# cmake ..
#
# Or use the -D flag with cmake:
# cmake -D CMAKE_C_COMPILER=clang -D CMAKE_CXX_COMPILER=clang++ ..
#
# Then compile with:
# make

# To target x64, you generally don't need to do anything special if you are on an x64 machine.
# On Windows with Visual Studio, you can use the -A flag for cmake to specify the architecture:
# cmake -A x64 ..
# On Linux, the default is usually x64 if that's your system architecture.

install(TARGETS simulator
    RUNTIME DESTINATION bin
)
