from celery.app import shared_task
import random
import time

@shared_task(bind=True)
def randomizer(self, duration):
    for _ in range(3):
        time.sleep(duration)
        self.update_state(
            state="PROGRESS",
            meta={
                'current': random.randint(1, 100), 
                'total': 100, 
                'percent': int(random.randint(1, 100) / 100 * 100),
                'finished': False
            }
        )
    return "Done"
