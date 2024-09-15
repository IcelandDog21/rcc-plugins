#include <stdio.h>
#include <cstring>

#define MAX 2

int main() {
    int i;
    char text[100] = "";

    for (i = 0; i < MAX; i++) {
        strcat(text, MAX[i]);
        printf("%s\n", text);
    }

    return 0;
}
