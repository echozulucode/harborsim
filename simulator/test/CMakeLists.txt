# Add the test executable
add_executable(run_tests tests/main.test.cpp)

# Link with Google Test
target_link_libraries(run_tests PRIVATE GTest::gtest_main)

# Include the project's include directory
target_include_directories(run_tests PRIVATE ../include)

# Add test to CTest
include(GoogleTest)
gtest_discover_tests(run_tests)
