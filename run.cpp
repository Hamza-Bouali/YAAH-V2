#include <iostream>
#include <cstdlib>

using namespace std;


int main()
{
    int result= system("python run.py || python3 run.py");

     if (result == 0) {
        cout << "Command executed successfully" << endl;
    } else {
        cout << "Command failed with error code: " << result << endl;
    }
    return 0;
}