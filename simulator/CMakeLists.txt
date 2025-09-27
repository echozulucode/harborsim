# CMake minimum version
cmake_minimum_required(VERSION 3.14)

# Project name and language
project(Simulator LANGUAGES CXX)

# Set C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Include directories
include_directories(include)

# Add executable from src folder
add_executable(simulator src/main.cpp)

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

install(TARGETS simulator
    RUNTIME DESTINATION bin
)

# Google Test
include(FetchContent)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/tags/v1.14.0.zip
)

# For Windows: Prevent overriding the parent project's compiler options.
set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(googletest)

# Enable testing
enable_testing()

# Add the test directory
add_subdirectory(test)

# To run tests, after building, you can run 'ctest' in the build directory.