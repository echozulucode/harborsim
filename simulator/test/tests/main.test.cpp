#include "gtest/gtest.h"

TEST(HelloWorldTest, BasicAssertion) {
    EXPECT_STRNE("Hello", "World");
    EXPECT_EQ(7 * 6, 42);
}
