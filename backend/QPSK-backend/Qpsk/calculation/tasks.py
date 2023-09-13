from celery.app import shared_task
import random
import time

@shared_task(bind=True)
def randomizer(self, duration):
    for i in range(100):
        time.sleep(duration)
        self.update_state(
            state="PROGRESS",
            meta={
                'current': i,
                'total': 100, 
                'percent': int(i / 100 * 100),
                'finished': False
            }
        )
    return "Done"
