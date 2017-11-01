import csv
import argparse

class Combine(object):
    def __init__(self, numFiles):
        self.numFiles = numFiles
    def combineFiles(self):
        totals = open("totals.csv", 'a')
        totals.write("id,start,end\n")
        for num in range(1,self.numFiles+1):
            for line in open("results/results"+str(num)+".csv"):
                totals.write(line)
        totals.close()
        with open("totals.csv", 'r') as totals:
            with open("final.csv", 'w') as final:
                writer = csv.writer(final, lineterminator='\n')
                reader = csv.reader(totals)

                all = []
                row = next(reader)
                row.append('time')
                all.append(row)
                for row in reader:
                    try:
                        row.append(int(row[2]) - int(row[1]))
                        all.append(row)
                    except:
                        continue
                writer.writerows(all)
if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='''Tool to calculate the dates an NBA team was eliminated from the playoff contention'''
    )
    parser.add_argument('--num_files', type=int, default=1,
        help='''Number of csv files to combine''')
    args = parser.parse_args()
    combine = Combine(args.num_files)
    combine.combineFiles()
