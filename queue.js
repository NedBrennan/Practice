function QueueTime(queue, tills) {
    q = queue
    nTills = []

    for (i = 0; i < tills; i++) {
        nTills.push(0)
    }

    smallest = 5

    for (i = 0; i < q.length; i++) {
        for (k = 0; k < tills.length; k ++) {
            if (nTills[k] <= nTills[smallest]) smallest = k
            console.log(smallest)
        }
        nTills[smallest] = nTills[smallest] + q[i]
    }
    console.log(nTills)
}

QueueTime([10,2,3,3], 2)